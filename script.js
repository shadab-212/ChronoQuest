// =============================================
//  History Quiz — JavaScript
//  Built by Shadab
// =============================================

// ── Inject SVG gradient for result ring ──
document.querySelector('#resultScreen .ring-svg').insertAdjacentHTML('afterbegin', `
  <defs>
    <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%"   stop-color="#b8790a"/>
      <stop offset="50%"  stop-color="#f0c060"/>
      <stop offset="100%" stop-color="#b8790a"/>
    </linearGradient>
  </defs>
`);

// ── Animated star-field background ──
(function () {
  const canvas = document.getElementById('bgCanvas');
  const ctx = canvas.getContext('2d');
  let W, H, stars;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
    stars = Array.from({ length: 120 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.2 + 0.2,
      a: Math.random(),
      speed: Math.random() * 0.004 + 0.001,
      dir: Math.random() > 0.5 ? 1 : -1
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    for (const s of stars) {
      s.a += s.speed * s.dir;
      if (s.a > 1 || s.a < 0) s.dir *= -1;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(200, 180, 120, ${s.a * 0.5})`;
      ctx.fill();
    }
    requestAnimationFrame(draw);
  }

  resize();
  draw();
  window.addEventListener('resize', resize);
})();

// ═══════════════════════════════════════════════
//  QUESTION BANK — 65 questions, 12 categories
// ═══════════════════════════════════════════════
const questionBank = [

  // ── WORLD WARS ──
  { q: "In which year did World War I begin?", options: ["1912", "1914", "1916", "1918"], answer: 1, fact: "WWI began in 1914 after the assassination of Archduke Franz Ferdinand of Austria-Hungary.", category: "World Wars" },
  { q: "Which country was NOT part of the Allied Powers in World War II?", options: ["USA", "USSR", "Italy", "UK"], answer: 2, fact: "Italy was originally part of the Axis Powers alongside Germany and Japan.", category: "World Wars" },
  { q: "The Battle of Stalingrad was fought between which two nations?", options: ["USA & Japan", "UK & Germany", "Germany & USSR", "France & Germany"], answer: 2, fact: "The Battle of Stalingrad (1942–43) ended in a decisive Soviet victory and turned the tide of WWII.", category: "World Wars" },
  { q: "On which date did D-Day (the Normandy landings) take place?", options: ["June 6, 1944", "May 8, 1945", "Sept 1, 1939", "Dec 7, 1941"], answer: 0, fact: "D-Day occurred on June 6, 1944, when Allied forces stormed the beaches of Normandy, France.", category: "World Wars" },
  { q: "Which event triggered the United States to enter World War II?", options: ["Sinking of the Lusitania", "Attack on Pearl Harbor", "Fall of France", "Battle of Britain"], answer: 1, fact: "Japan's surprise attack on Pearl Harbor on December 7, 1941 brought the USA into World War II.", category: "World Wars" },

  // ── ANCIENT ──
  { q: "The Great Wall of China was primarily built to protect against which group?", options: ["Mongols", "Japanese", "Persians", "Romans"], answer: 0, fact: "The Great Wall was built over centuries mainly to defend against Mongol raids from the north.", category: "Ancient World" },
  { q: "Which ancient wonder was located in Alexandria, Egypt?", options: ["The Colossus", "The Lighthouse", "Hanging Gardens", "Temple of Artemis"], answer: 1, fact: "The Lighthouse of Alexandria was one of the tallest man-made structures for centuries.", category: "Ancient World" },
  { q: "Which ancient civilization built Machu Picchu?", options: ["Maya", "Aztec", "Inca", "Olmec"], answer: 2, fact: "Machu Picchu was built by the Inca Empire in the 15th century in present-day Peru.", category: "Ancient World" },
  { q: "The ancient city of Petra was carved into rock in which modern country?", options: ["Israel", "Jordan", "Saudi Arabia", "Iraq"], answer: 1, fact: "Petra, the 'Rose City,' is located in Jordan and was the capital of the Nabataean Kingdom.", category: "Ancient World" },
  { q: "Which river did Julius Caesar famously cross to start a civil war in 49 BC?", options: ["Tiber", "Rhine", "Rubicon", "Danube"], answer: 2, fact: "Caesar crossing the Rubicon became a timeless symbol of a point of no return.", category: "Ancient World" },
  { q: "The Colosseum in Rome was completed under which Emperor?", options: ["Augustus", "Nero", "Titus", "Hadrian"], answer: 2, fact: "The Colosseum was completed around 80 AD under Emperor Titus.", category: "Ancient World" },
  { q: "Which ancient empire was ruled from the city of Persepolis?", options: ["Roman", "Babylonian", "Persian", "Greek"], answer: 2, fact: "Persepolis was the ceremonial capital of the Achaemenid Persian Empire.", category: "Ancient World" },

  // ── INDIA ──
  { q: "Who was the first Prime Minister of independent India?", options: ["Mahatma Gandhi", "Sardar Patel", "Jawaharlal Nehru", "B.R. Ambedkar"], answer: 2, fact: "Jawaharlal Nehru became India's first Prime Minister on August 15, 1947.", category: "India" },
  { q: "The Mughal Empire was founded by which ruler?", options: ["Akbar", "Babur", "Humayun", "Aurangzeb"], answer: 1, fact: "Babur founded the Mughal Empire after winning the First Battle of Panipat in 1526.", category: "India" },
  { q: "In which year did the Indian Rebellion (Sepoy Mutiny) take place?", options: ["1847", "1857", "1867", "1877"], answer: 1, fact: "The Indian Rebellion of 1857 was a major uprising against British East India Company rule.", category: "India" },
  { q: "The Taj Mahal was built by Emperor Shah Jahan in memory of whom?", options: ["His mother", "His daughter", "His wife Mumtaz Mahal", "His first queen"], answer: 2, fact: "Shah Jahan built the Taj Mahal between 1632 and 1653 as a mausoleum for his beloved wife.", category: "India" },
  { q: "Mahatma Gandhi's famous Salt March took place in which year?", options: ["1920", "1925", "1930", "1935"], answer: 2, fact: "Gandhi led the 240-mile Salt March in 1930 to protest British salt taxes, sparking civil disobedience.", category: "India" },
  { q: "Which Mughal emperor was known for promoting religious tolerance across his empire?", options: ["Babur", "Humayun", "Akbar", "Aurangzeb"], answer: 2, fact: "Akbar I (1556–1605) was renowned for his policy of religious tolerance and his blended court culture.", category: "India" },

  // ── CHINA ──
  { q: "The Long March was a strategic retreat by which Chinese political group?", options: ["Kuomintang", "Communist Party", "Qing Dynasty", "Warlords"], answer: 1, fact: "The Long March (1934–35) was Mao Zedong's Communist Party's epic 9,000 km retreat.", category: "China" },
  { q: "Which dynasty built most of the Great Wall of China we see today?", options: ["Han", "Tang", "Ming", "Qing"], answer: 2, fact: "Most of the existing Great Wall was built during the Ming Dynasty (1368–1644).", category: "China" },
  { q: "Tiananmen Square protests took place in which year?", options: ["1979", "1985", "1989", "1993"], answer: 2, fact: "The 1989 Tiananmen Square protests were a pro-democracy movement brutally suppressed by the government.", category: "China" },
  { q: "Who was the first Emperor of a unified China?", options: ["Emperor Wu", "Qin Shi Huang", "Liu Bang", "Emperor Yao"], answer: 1, fact: "Qin Shi Huang unified the warring states of China in 221 BC, founding the Qin Dynasty.", category: "China" },

  // ── JAPAN ──
  { q: "The samurai class in Japan served which group?", options: ["Merchants", "Priests", "Feudal lords (daimyo)", "Farmers"], answer: 2, fact: "Samurai were elite warriors who served feudal lords known as daimyo in Japan's feudal system.", category: "Japan" },
  { q: "Japan's modernization known as the Meiji Restoration began in which year?", options: ["1848", "1858", "1868", "1878"], answer: 2, fact: "The Meiji Restoration began in 1868, rapidly modernizing Japan's society, military, and government.", category: "Japan" },
  { q: "Which two Japanese cities were struck by atomic bombs in August 1945?", options: ["Tokyo & Osaka", "Hiroshima & Nagasaki", "Kyoto & Hiroshima", "Nagasaki & Tokyo"], answer: 1, fact: "The USA dropped atomic bombs on Hiroshima (Aug 6) and Nagasaki (Aug 9), 1945, ending WWII.", category: "Japan" },
  { q: "In which century did the Mongols attempt (and fail) to invade Japan?", options: ["11th", "12th", "13th", "14th"], answer: 2, fact: "Kublai Khan launched two failed invasions of Japan in 1274 and 1281 — typhoons destroyed his fleets each time.", category: "Japan" },

  // ── EGYPT ──
  { q: "Which Egyptian queen famously allied with Julius Caesar and Mark Antony?", options: ["Nefertiti", "Cleopatra", "Hatshepsut", "Isis"], answer: 1, fact: "Cleopatra VII formed alliances with both Julius Caesar and Mark Antony to maintain Egypt's power.", category: "Egypt" },
  { q: "The Rosetta Stone helped scholars decode which ancient writing system?", options: ["Cuneiform", "Sanskrit", "Hieroglyphics", "Linear B"], answer: 2, fact: "Discovered in 1799, the Rosetta Stone was the key that unlocked Egyptian hieroglyphics.", category: "Egypt" },
  { q: "Which pharaoh is most associated with the Great Pyramid of Giza?", options: ["Tutankhamun", "Ramesses II", "Khufu", "Akhenaten"], answer: 2, fact: "The Great Pyramid of Giza was built as a tomb for Pharaoh Khufu around 2560 BC.", category: "Egypt" },
  { q: "Egypt gained full independence from Britain in which year?", options: ["1922", "1936", "1952", "1956"], answer: 2, fact: "Egypt gained full independence in 1952 when the monarchy was overthrown by the Free Officers Movement.", category: "Egypt" },

  // ── EUROPE ──
  { q: "The Renaissance began in which country?", options: ["France", "Germany", "Italy", "Spain"], answer: 2, fact: "The Renaissance began in Italy during the 14th–17th centuries, starting in city-states like Florence.", category: "Europe" },
  { q: "Who was the 'Iron Chancellor' who unified Germany in 1871?", options: ["Kaiser Wilhelm", "Otto von Bismarck", "Friedrich Nietzsche", "Karl Marx"], answer: 1, fact: "Otto von Bismarck unified the German states into the German Empire in 1871 through wars and diplomacy.", category: "Europe" },
  { q: "The Spanish Armada was defeated by which country in 1588?", options: ["France", "Portugal", "England", "Netherlands"], answer: 2, fact: "England under Queen Elizabeth I defeated the Spanish Armada in 1588 — a defining moment in naval history.", category: "Europe" },
  { q: "Napoleon Bonaparte was exiled to which island after his final defeat?", options: ["Corsica", "Elba", "Saint Helena", "Malta"], answer: 2, fact: "After his defeat at Waterloo in 1815, Napoleon was exiled to the remote island of Saint Helena.", category: "Europe" },
  { q: "The Protestant Reformation was sparked by which figure in 1517?", options: ["John Calvin", "Martin Luther", "Henry VIII", "Erasmus"], answer: 1, fact: "Martin Luther nailed his 95 Theses to a church door in 1517, igniting the Protestant Reformation.", category: "Europe" },
  { q: "The Hundred Years' War was fought between which two countries?", options: ["England & Spain", "France & Germany", "England & France", "Spain & Portugal"], answer: 2, fact: "The Hundred Years' War (1337–1453) was a prolonged series of conflicts between England and France.", category: "Europe" },
  { q: "Which French heroine helped drive the English out of France in the 15th century?", options: ["Catherine de' Medici", "Eleanor of Aquitaine", "Joan of Arc", "Marie Antoinette"], answer: 2, fact: "Joan of Arc led French forces to several victories before being captured and burned at the stake in 1431.", category: "Europe" },
  { q: "Which Russian ruler modernized Russia and built St. Petersburg in the early 18th century?", options: ["Ivan the Terrible", "Catherine the Great", "Peter the Great", "Alexander I"], answer: 2, fact: "Peter the Great (1682–1725) modernized Russia and founded St. Petersburg as a 'window to Europe'.", category: "Europe" },

  // ── AFRICA ──
  { q: "Who was the first president of South Africa after apartheid ended?", options: ["Desmond Tutu", "F.W. de Klerk", "Nelson Mandela", "Thabo Mbeki"], answer: 2, fact: "Nelson Mandela became South Africa's first Black president in 1994 after 27 years in prison.", category: "Africa" },
  { q: "The ancient Kingdom of Mali was famous for its wealth due to which resources?", options: ["Diamonds", "Oil", "Gold and Salt", "Ivory"], answer: 2, fact: "The Mali Empire was fabulously wealthy from controlling trans-Saharan gold and salt trade routes.", category: "Africa" },
  { q: "Ethiopia uniquely avoided European colonization by defeating which country in 1896?", options: ["Britain", "France", "Italy", "Germany"], answer: 2, fact: "Ethiopia defeated Italy at the Battle of Adwa in 1896, remaining one of the only African nations never colonized.", category: "Africa" },
  { q: "Which African leader led Ghana to become the first sub-Saharan African country to gain independence?", options: ["Jomo Kenyatta", "Julius Nyerere", "Kwame Nkrumah", "Patrice Lumumba"], answer: 2, fact: "Kwame Nkrumah led Ghana to independence in 1957.", category: "Africa" },
  { q: "The ancient Great Zimbabwe ruins were built by ancestors of which people?", options: ["Zulu", "Shona", "Ndebele", "Xhosa"], answer: 1, fact: "Great Zimbabwe was built by the Shona people and served as a royal city from the 11th–15th centuries.", category: "Africa" },

  // ── AMERICAS ──
  { q: "Christopher Columbus first arrived in the Americas in which year?", options: ["1488", "1492", "1498", "1502"], answer: 1, fact: "Columbus landed in the Bahamas on October 12, 1492, beginning Europe's sustained contact with the Americas.", category: "Americas" },
  { q: "The American Declaration of Independence was signed in which year?", options: ["1774", "1775", "1776", "1777"], answer: 2, fact: "The Declaration of Independence was signed on July 4, 1776, forming the United States of America.", category: "Americas" },
  { q: "Which general led the Confederate Army during the American Civil War?", options: ["Ulysses S. Grant", "Robert E. Lee", "Stonewall Jackson", "William Sherman"], answer: 1, fact: "General Robert E. Lee commanded the Confederate Army of Northern Virginia throughout the Civil War.", category: "Americas" },
  { q: "The Mexican Revolution of 1910 was fought against whose dictatorship?", options: ["Benito Juárez", "Porfirio Díaz", "Santa Anna", "Agustín de Iturbide"], answer: 1, fact: "The Mexican Revolution overthrew Porfirio Díaz, who had ruled Mexico as a dictator for over 30 years.", category: "Americas" },
  { q: "Brazil was a colony of which European country?", options: ["Spain", "France", "Netherlands", "Portugal"], answer: 3, fact: "Brazil was colonized by Portugal and declared independence in 1822 under Emperor Pedro I.", category: "Americas" },
  { q: "Which Native American leader led forces that defeated General Custer at Little Bighorn in 1876?", options: ["Geronimo", "Sitting Bull", "Crazy Horse", "Chief Joseph"], answer: 1, fact: "Sitting Bull, a Hunkpapa Lakota leader, led the coalition of tribes that defeated Custer at Little Bighorn.", category: "Americas" },

  // ── MIDDLE EAST ──
  { q: "The ancient city of Babylon was located in which modern country?", options: ["Iran", "Syria", "Iraq", "Turkey"], answer: 2, fact: "Babylon, one of the greatest ancient cities, was located in what is now central Iraq.", category: "Middle East" },
  { q: "The Suez Canal connects which two bodies of water?", options: ["Black Sea & Caspian Sea", "Red Sea & Mediterranean Sea", "Persian Gulf & Indian Ocean", "Nile & Mediterranean"], answer: 1, fact: "The Suez Canal connects the Red Sea to the Mediterranean, dramatically shortening the Europe-Asia route.", category: "Middle East" },
  { q: "The Ottoman Empire had its capital in which city?", options: ["Baghdad", "Cairo", "Damascus", "Constantinople"], answer: 3, fact: "Constantinople (modern Istanbul) served as the Ottoman Empire's capital from 1453 until 1922.", category: "Middle East" },
  { q: "In which year was the state of Israel officially established?", options: ["1945", "1946", "1947", "1948"], answer: 3, fact: "Israel declared independence on May 14, 1948, following the end of the British Mandate for Palestine.", category: "Middle East" },

  // ── RUSSIA ──
  { q: "The Russian Revolution that overthrew the Tsar took place in which year?", options: ["1905", "1914", "1917", "1920"], answer: 2, fact: "The Russian Revolution of 1917 led to the abdication of Tsar Nicholas II and the Bolshevik rise to power.", category: "Russia" },
  { q: "Which Soviet leader came to power after Stalin's death in 1953?", options: ["Brezhnev", "Khrushchev", "Gorbachev", "Andropov"], answer: 1, fact: "Nikita Khrushchev succeeded Stalin and famously denounced his cult of personality in 1956.", category: "Russia" },
  { q: "The Siege of Leningrad during WWII lasted approximately how long?", options: ["6 months", "1 year", "872 days", "4 years"], answer: 2, fact: "The Siege of Leningrad lasted 872 days (1941–1944), one of the longest and most destructive sieges in history.", category: "Russia" },
  { q: "Which Russian Tsar freed the serfs in 1861?", options: ["Peter the Great", "Catherine the Great", "Alexander I", "Alexander II"], answer: 3, fact: "Tsar Alexander II emancipated the serfs in 1861 in a landmark social reform.", category: "Russia" },

  // ── LATIN AMERICA ──
  { q: "Which liberator is known as 'El Libertador' for freeing much of South America?", options: ["José de San Martín", "Simón Bolívar", "Bernardo O'Higgins", "Francisco de Miranda"], answer: 1, fact: "Simón Bolívar played a key role in liberating Venezuela, Colombia, Ecuador, Peru, and Bolivia from Spanish rule.", category: "Latin America" },
  { q: "The Cuban Missile Crisis of 1962 was a standoff between the USA and which country?", options: ["Cuba", "China", "USSR", "East Germany"], answer: 2, fact: "The 13-day Cuban Missile Crisis was a confrontation between the USA and USSR over Soviet missiles in Cuba.", category: "Latin America" },
  { q: "Which explorer's expedition became the first to circumnavigate the globe?", options: ["Christopher Columbus", "Vasco da Gama", "Ferdinand Magellan", "Francis Drake"], answer: 2, fact: "Magellan's expedition (1519–1522) was the first to circumnavigate the globe, though he died en route.", category: "Latin America" },

  // ── CULTURE & SCIENCE ──
  { q: "Who is credited with inventing the printing press around 1440?", options: ["Leonardo da Vinci", "Johannes Gutenberg", "Galileo Galilei", "Nicolaus Copernicus"], answer: 1, fact: "Gutenberg's printing press revolutionized the spread of knowledge and helped spark the Reformation.", category: "Science & Culture" },
  { q: "In which country did the Industrial Revolution begin?", options: ["France", "Germany", "USA", "Britain"], answer: 3, fact: "The Industrial Revolution began in Britain in the late 18th century, transforming manufacturing worldwide.", category: "Science & Culture" },
  { q: "The Black Death devastated Europe in which century?", options: ["12th", "13th", "14th", "15th"], answer: 2, fact: "The Black Death swept Europe in the mid-14th century, killing an estimated one-third of the population.", category: "Science & Culture" },
  { q: "Who was the first person to walk on the Moon?", options: ["Yuri Gagarin", "Buzz Aldrin", "Neil Armstrong", "John Glenn"], answer: 2, fact: "Neil Armstrong became the first human to walk on the Moon on July 20, 1969, during Apollo 11.", category: "Science & Culture" },
  { q: "The first country to send a human to space was?", options: ["USA", "USSR", "Germany", "China"], answer: 1, fact: "The Soviet Union sent Yuri Gagarin into space on April 12, 1961, making him the first human in space.", category: "Science & Culture" },

  // ── MISC ──
  { q: "Which empire was the largest contiguous land empire in history?", options: ["British Empire", "Roman Empire", "Mongol Empire", "Russian Empire"], answer: 2, fact: "The Mongol Empire at its height covered over 24 million square kilometers of contiguous land.", category: "World History" },
  { q: "The Cold War was primarily a rivalry between which two superpowers?", options: ["USA & China", "USA & USSR", "UK & USSR", "France & USA"], answer: 1, fact: "The Cold War (1947–1991) was a geopolitical rivalry between the USA and Soviet Union without direct war.", category: "World History" },
  { q: "Which treaty officially ended World War I in 1919?", options: ["Treaty of Paris", "Treaty of Versailles", "Treaty of Utrecht", "Treaty of Westphalia"], answer: 1, fact: "The Treaty of Versailles (1919) officially ended WWI and imposed heavy reparations on Germany.", category: "World History" },
  { q: "The United Nations was founded in which year?", options: ["1943", "1944", "1945", "1946"], answer: 2, fact: "The United Nations was founded on October 24, 1945, following the end of World War II.", category: "World History" },
  { q: "Which country was the first to grant women the right to vote nationally?", options: ["Australia", "New Zealand", "Finland", "Norway"], answer: 1, fact: "New Zealand was the first self-governing country to grant all women the right to vote in 1893.", category: "World History" },
  { q: "The Silk Road was a trade route connecting China to which region?", options: ["Africa", "The Americas", "Europe and the Middle East", "India only"], answer: 2, fact: "The Silk Road was an ancient network of trade routes connecting China to Europe and the Middle East.", category: "World History" },
];

// ═══════════════════════════════════════════════
//  STATE
// ═══════════════════════════════════════════════
let currentQuestions = [];
let current = 0;
let score = 0;
let answered = false;
const TOTAL = 10;
const labels = ['A', 'B', 'C', 'D'];

// ── Fisher-Yates shuffle ──
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ── Pick 10 diverse questions spread across categories ──
function pickQuestions() {
  const byCategory = {};
  questionBank.forEach(q => {
    if (!byCategory[q.category]) byCategory[q.category] = [];
    byCategory[q.category].push(q);
  });

  const selected = [];
  const shuffledCats = shuffle(Object.keys(byCategory));

  for (const cat of shuffledCats) {
    if (selected.length >= TOTAL) break;
    const pool = shuffle(byCategory[cat]);
    selected.push(pool[0]);
  }

  if (selected.length < TOTAL) {
    const remaining = shuffle(questionBank.filter(q => !selected.includes(q)));
    for (const q of remaining) {
      if (selected.length >= TOTAL) break;
      selected.push(q);
    }
  }

  return shuffle(selected);
}

// ── Show a screen by ID ──
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// ═══════════════════════════════════════════════
//  QUIZ FLOW
// ═══════════════════════════════════════════════
function startQuiz() {
  current = 0;
  score = 0;
  currentQuestions = pickQuestions();
  showScreen('questionScreen');
  loadQuestion();
}

function restartQuiz() {
  startQuiz();
}

function loadQuestion() {
  answered = false;
  const q = currentQuestions[current];

  // Topbar
  document.getElementById('qNum').textContent = `${current + 1} / ${TOTAL}`;
  document.getElementById('qScore').textContent = score;
  document.getElementById('progressBar').style.width = `${(current / TOTAL) * 100}%`;

  // Category + question
  document.getElementById('qCategory').textContent = `📜 ${q.category}`;
  document.getElementById('questionText').textContent = q.q;

  // Build answer buttons
  const grid = document.getElementById('optionsGrid');
  grid.innerHTML = '';
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = `
      <span class="opt-label-box">${labels[i]}</span>
      <span class="opt-text">${opt}</span>
    `;
    btn.onclick = () => selectAnswer(i, btn);
    grid.appendChild(btn);
  });

  // Reset feedback & next
  const fb = document.getElementById('feedback');
  fb.className = 'feedback-bar';
  fb.textContent = '';
  const nb = document.getElementById('nextBtn');
  nb.style.display = 'none';
}

function selectAnswer(index, btn) {
  if (answered) return;
  answered = true;

  const q = currentQuestions[current];
  const allBtns = document.querySelectorAll('.option-btn');
  allBtns.forEach(b => (b.disabled = true));

  const fb = document.getElementById('feedback');

  if (index === q.answer) {
    btn.classList.add('correct');
    score++;
    fb.textContent = '✓  Correct! ' + q.fact;
    fb.className = 'feedback-bar correct-fb show';
  } else {
    btn.classList.add('wrong');
    allBtns[q.answer].classList.add('correct');
    fb.textContent = '✗  Not quite. ' + q.fact;
    fb.className = 'feedback-bar wrong-fb show';
  }

  document.getElementById('qScore').textContent = score;

  const nb = document.getElementById('nextBtn');
  nb.style.display = 'inline-block';
  nb.textContent = current < TOTAL - 1 ? 'Next →' : 'See Results →';
}

function nextQuestion() {
  current++;
  if (current < TOTAL) {
    loadQuestion();
  } else {
    showResults();
  }
}

// ── Results ──
function showResults() {
  showScreen('resultScreen');

  const pct = Math.round((score / TOTAL) * 100);
  document.getElementById('scoreNumber').textContent = score;
  document.getElementById('scoreLabel').textContent = `${pct}% correct`;

  // Animate ring
  const circumference = 2 * Math.PI * 88; // r=88
  const offset = circumference - (pct / 100) * circumference;
  const ring = document.getElementById('ringFg');
  ring.style.strokeDasharray = circumference;
  ring.style.strokeDashoffset = circumference;
  setTimeout(() => { ring.style.strokeDashoffset = offset; }, 100);

  let title, msg;
  if      (score === 10) { title = "Legendary Historian!";  msg = "A perfect score — you command the chronicles of time itself."; }
  else if (score >= 8)   { title = "Master of History!";    msg = "Exceptional knowledge. The past holds few secrets from you."; }
  else if (score >= 6)   { title = "History Scholar";       msg = "A solid grasp of the past. A few more pages to turn."; }
  else if (score >= 4)   { title = "Apprentice Historian";  msg = "A worthy start. History rewards those who keep studying."; }
  else                   { title = "The Journey Begins";    msg = "Every great historian starts somewhere. Try again!"; }

  document.getElementById('resultTitle').textContent = title;
  document.getElementById('resultMsg').textContent   = msg;
}