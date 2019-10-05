// alert("Copy");

// let calcNetWorth = document.querySelector("#calc-asset");

// function calc() {
//   // body...
//   let asset = parseInt(document.getElementById("assets").value);
//   let cash = parseInt(document.getElementById("cash").value);
//   let liability = parseInt(document.getElementById("liability").value);
//   let result;
// //   console.log(typeof asset);

//   if ((result = asset + cash - liability)) {
//     // result = parseInt(currency);
//     let toCurrency = new Intl.NumberFormat("en-NG", {
//       style: "currency",
//       currency: "NGN"
//     }).format(result);
//     document.querySelector("#result").innerHTML = toCurrency;
// 	console.log(result);
//   }

// }

// calcNetWorth.addEventListener("click", calc);

// function restCalc() {
//   document.getElementById("myForm").reset();
// }

let toCurrency

/* let modal = document.querySelector(".display-result");
let trigger = document.querySelector(".trigger");
let closeButton = document.querySelector(".close-btn");

function toggleModal() {
  modal.classList.toggle("show-result");
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick); */

//inputs addition
function add() {
  var land = parseFloat(document.getElementById("land").value);
  var furniture = parseFloat(document.getElementById("furniture").value);
  var vehicles = parseFloat(document.getElementById("vehicles").value);
  var royalty = parseFloat(document.getElementById("royalty").value);
  var others = parseFloat(document.getElementById("others").value);

  sum = land + furniture + vehicles + royalty + others;

  if (!isNaN(sum)) {
    document.getElementById("total").value = sum;
  }
}
function addLiabilities() {
  var expenses = parseFloat(document.getElementById("expenses").value);
  var loan = parseFloat(document.getElementById("loan").value);
  var tax = parseFloat(document.getElementById("tax").value);
  var rent = parseFloat(document.getElementById("rent").value);
  var other = parseFloat(document.getElementById("other").value);

  total = expenses + loan + tax + rent + other;

  if (!isNaN(total)) {
    document.getElementById("total-liabilities").value = total;
  }
}

function calc() {
  var assets = parseFloat(document.getElementById("total-liabilities").value);
  var land = parseFloat(document.getElementById("land").value);
  var furniture = parseFloat(document.getElementById("furniture").value);
  var vehicles = parseFloat(document.getElementById("vehicles").value);
  var royalty = parseFloat(document.getElementById("royalty").value);
  var others = parseFloat(document.getElementById("others").value);

  liabilities = land + furniture + vehicles + royalty + others;
  net = -(assets - liabilities);
  if (!isNaN(net)) {
    document.getElementById("net").value = net;
  }
}

 
 var joke = [
		'\"I think frugality drives innovation, just like other constraints do. One of the only ways to get out of a tight box is to invent your way out.\" - Jeff Bezos',
		'\"If you are born poor it\'s not your mistake, but if you die poor its your mistake\" - Bill Gates',
		'\"If you don’t find a way to make money while you sleep, you will work until you die.\" - Warren Buffet',
		'\"Money is just a consequence. I always say to my team, Don\'t worry too much about profitability. If you do your job well, the profitability will come.\" - Bernard Arnault',
		'\"The biggest risk is not taking any risk. In a world that is changing really quickly, the only strategy that is guaranteed to fail is not taking risks.\" - Mark Zuckerberg',
		'\"Low interest rates are a big opportunity for investment. But the issue is that this money should go to the real economy, not the financial economy.\" - Carlos Slim Helu',
		'\"Relentlessly strive to come up with new and better products and produce them more efficiently than the alternatives.\" - Charles Koch',
		'\"Lots of companies don\'t succeed over time. What do they fundamentally do wrong\? They usually miss the future.\" - Larry Page',
		'\"I learned from my dad that change and experimentation are constants and important. You have to keep trying new things.\" - S. Robson Walton',
		'\"I\'m coming to this world not to work. I want to come to this world to enjoy my life. I don\'t want to die in my office. I want to die on the beaches.\" - Jack Ma',
		'\"Poor is the man who does not know his own intrinsic worth and tends to measure everything by relative value. A man of financial wealth who values himself by his financial net worth is poorer than a poor man who values himself by his intrinsic self worth.\" - Sydney Madwed',
		'\"The habit of doing more than you are paid for can benefit any business that sells a product or service. Learning and understanding the principle of the mastermind philosophy of networking can increase the value of your network and your net worth.\" - Clay Clark',
		'\"Your net worth to the world is usually determined by what remains after your bad habits are subtracted from your good ones.\" - Benjamin Franklin',
		'\"A wise person should have money in their head, but not in their heart.\" - Jonathan Swift',
		'\"Our incomes are like our shoes\; if too small, they gall and pinch us\; but if too large, they cause us to stumble and to trip.\" - John Locke',
		'\"Invest in yourself. Your career is the engine of your wealth.\" - Paul Clitheroe',
		'\"An investment in knowledge pays the best interest.\" - Benjamin Franklin',
		'\"Wealth consists not in having great possessions, but in having few wants.\" - Epictetus',
		'\"Try to save something while your salary is small\; it\'s impossible to save after you begin to earn more.\" - Jack Benny',
		'\"The individual investor should act consistently as an investor and not as a speculator.\" - Ben Graham',
		'\"Many people take no care of their money till they come nearly to the end of it, and others do just the same with their time.\" - Johann Wolfgang von Goethe',
		'\"Personal finances are like people\'s personal health, crucial and tragic to the sufferer but tedious to the listener.\" - Thomas Keneally',
		'\"A wise person should have money in their head, but not in their heart.-Jonathan Swift',
		'\"Everyday is a bank account, and time is our currency. No one is rich, no one is poor, we\'ve got 24 hours each. -Christopher Rice\"',
		'\"I will tell you the secret to getting rich on Wall Street. You try to be greedy when others are fearful. And you try to be fearful when others are greedy.\" -Warren Buffett',
		'\"Annual income twenty pounds, annual expenditure nineteen six, result happiness. Annual income twenty pounds, annual expenditure twenty pound ought and six, result misery.\" -Charles Dickens',
		'\"What we really want to do is what we are really meant to do. When we do what we are meant to do, money comes to us, doors open for us, we feel useful, and the work we do feels like play to us.\" -Julia Cameron',
		'\"Formal education will make you a living; self-education will make you a fortune.\" -Jim Rohn',
		'\"It’s not the employer who pays the wages. Employers only handle the money. It’s the customer who pays the wages.\" -Henry Ford',
		'\"Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.\" -Ayn Rand',
		'\"Happiness is not in the mere possession of money; it lies in the joy of achievement, in the thrill of creative effort.\" -Franklin D. Roosevelt',
		'\"Empty pockets never held anyone back. Only empty heads and empty hearts can do that.\" -Norman Vincent Peale',
		'\"You can only become truly accomplished at something you love. Don’t make money your goal. Instead, pursue the things you love doing, and then do them so well that people can’t take their eyes off you.\" -Maya Angelou',
		'\"Buy when everyone else is selling and hold until everyone else is buying. That’s not just a catchy slogan. It’s the very essence of successful investing.\" -J. Paul Getty',
		'\"If money is your hope for independence you will never have it. The only real security that a man will have in this world is a reserve of knowledge, experience, and ability.\" -Henry Ford',
		'\"How many millionaires do you know who have become wealthy by investing in savings accounts? I rest my case.\" -Robert G. Allen',
		'\"The real measure of your wealth is how much you\'d be worth if you lost all your money.\" -Anonymous',
		'\"Money is a terrible master but an excellent servant.\" -P.T. Barnum',
		'\"The individual investor should act consistently as an investor and not as a speculator.\" -Ben Graham',
		'\"It\'s not how much money you make, but how much money you keep, how hard it works for you, and how many generations you keep it for.\" -Robert Kiyosaki',
		'\"Never spend your money before you have it.\" -Thomas Jefferson',
		'\"If you don’t value your time, neither will others. Stop giving away your time and talents. Value what you know & start charging for it.\" -Kim Garst',
		'\"Don\'t be afraid to give up the good to go for the great.\" -John D. Rockefeller',
		'\"A friendship founded on business is better than a business founded on friendship.\" -John D. Rockefeller',
		'\"If you want to succeed you should strike out on new paths, rather than travel the worn paths of accepted success.\" -John D. Rockefeller',
		'\"The habit of saving is itself an education; it fosters every virtue, teaches self-denial, cultivates the sense of order, trains to forethought, and so broadens the mind.\" -T.T. Munger',
		'\"Don\'t tell me what you value, show me your budget, and I\'ll tell you what you value.\" -Joe Biden',
		'\"If your only goal is to become rich, you will never achieve it.\" -John D. Rockefeller',
		'\"Before you speak, listen. Before you write, think. Before you spend, earn. Before you invest, investigate. Before you criticize, wait. Before you pray, forgive. Before you quit, try. Before you retire, save. Before you die, give.\" -William A. Ward',
		'\"Charity is injurious unless it helps the recipient to become independent of it.\" -John D. Rockefeller',
		'\"Wealth after all is a relative thing since he that has little and wants less is richer than he that has much and wants more.\" -Charles Caleb Colton',
		'\"Not everything that can be counted counts, and not everything that counts can be counted.\" -Albert Einstein',
		'\"It is time for us to stand and cheer for the doer, the achiever, the one who recognizes the challenge and does something about it.\" -Vince Lombardi',
		'\"I would rather earn 1% off a 100 people\'s efforts than 100% of my own efforts.\" -John D. Rockefeller',
		'\"Live as if you were to die tomorrow. Learn as if you were to live forever.\" -Mahatma Gandhi',
		'\"Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.\" -Mark Twain',
		'\"Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.\" -Dale Carnegie',
		'\"People often say that motivation doesn’t last. Well, neither does bathing – that’s why we recommend it daily.\" -Zig Ziglar',
		'\"As long as you\'re going to be thinking anyway, think big.\" -Donald Trump',
		'\"Success is walking from failure to failure with no loss of enthusiasm.\"-Winston Churchill',
		'\"If plan A fails, remember there are 25 more letters.\" -Chris Guillebeau',
		'\"A journey of a thousand miles must begin with a single step.\" -Lao Tzu',
		'\"Do the one thing you think you cannot do. Fail at it. Try again. Do better the second time. The only people who never tumble are those who never mount the high wire. This is your moment. Own it.\" -Oprah Winfrey',
		'\"The Stock Market is designed to transfer money from the Active to the Patient.\" -Warren Buffett',
		'\"It takes as much energy to wish as it does to plan.\" -Eleanor Roosevelt',
		'\"I\'d like to live as a poor man with lots of money.\" -Pablo Picasso',
		'\"Fortune sides with him who dares.\" -Virgil',
		'\"Wealth is not his that has it, but his that enjoys it.\" -Benjamin Franklin',
		'\"Before you speak, listen. Before you write, think. Before you spend, earn. Before you invest, investigate. Before you criticize, wait. Before you pray, forgive. Before you quit, try. Before you retire, save. Before you die, give.\" -William A. Ward',
		'\"It\'s not the situation, but whether we react (negative) or respond (positive) to the situation that\'s important.\" -Zig Ziglar',
		'\"Let him who would enjoy a good future waste none of his present.\" -Roger Babson',
		'\"It is our choices, that show what we truly are, far more than our abilities.\" -J. K Rowling',
		'\"The only place where success comes before work is in the dictionary.\" -Vidal Sassoon',
]
 
function showJoke() {
	
	var pick = Math.floor(Math.random() * (joke.length));
	
	document.getElementById('quote').innerHTML = joke[pick];
}

showJoke()


