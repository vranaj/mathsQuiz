function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


function reduce(numerator,denominator){
  var gcd = function gcd(a,b){
    return b ? gcd(b, a%b) : a;
  };
  gcd = gcd(numerator,denominator);
  return [numerator/gcd, denominator/gcd];
}


function getMedian(args) {
  if (!args.length) {return 0};
  var numbers = args.slice(0).sort((a,b) => a - b);
  var middle = Math.floor(numbers.length / 2);
  var isEven = numbers.length % 2 === 0;
  return isEven ? (numbers[middle] + numbers[middle - 1]) / 2 : numbers[middle];
}


function factors(n)
{
 var num_factors = [], i;
 
 for (i = 1; i <= Math.floor(Math.sqrt(n)); i += 1)
  if (n % i === 0)
  {
   num_factors.push(i);
   if (n / i !== i)
    num_factors.push(n / i);
  }
 num_factors.sort(function(x, y)
   {
     return x - y;});  // numeric sort
     return num_factors;
    }

function gcd_two_numbers(x, y) {
  if ((typeof x !== 'number') || (typeof y !== 'number')) 
    return false;
  x = Math.abs(x);
  y = Math.abs(y);
  while(y) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
}

function lcm_two_numbers(x, y) {
   if ((typeof x !== 'number') || (typeof y !== 'number')) 
    return false;
  return (!x || !y) ? 0 : Math.abs((x * y) / gcd_two_numbers(x, y));
}

function gcd_two_numbers(x, y) {
  x = Math.abs(x);
  y = Math.abs(y);
  while(y) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
}
Chart.defaults.global.defaultFontColor = "#fff";
var myChart;
var quiz = {

    duration: 10,
    question: 180,
    randomize: false,

 
	 data: [








// Problem 1
       {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 7) + 1;
                op2 = Math.ceil(Math.random() * 7) + 1;
                op3 = Math.ceil(Math.random() * 7) + 1;
                op4 = Math.ceil(Math.random() * 7) + 1;
                op5 = Math.ceil(Math.random() * 7) + 1;
                op6 = Math.ceil(Math.random() * 7) + 1;
                op7 = Math.ceil(Math.random() * 7) + 1;
                fraction = reduce(op1,op2);
                
                return {
                   ques:`Find the measure of angle 1`,
                    Hint: `Its a hint`,
                    Answer: `Answer: $45 ^{\\circ}$`

                 }

                 //return `Find the 2 roots of the quadratic equation: $x^2 + ${opA}x + ${opB} $ `;
                //"Find the 2 roots of the quadratic equation: x^2 -" + (op1 + op2) + "x + " + (op1 * op2) + "";
            },
            answer: function() {
                return 1;
            },
            loadCanvas: function() {

                var cnavsCntnr = document.getElementById('canvas');

                if (cnavsCntnr.getContext) {


   var contx = cnavsCntnr.getContext('2d');
   var ctx = canvas.getContext('2d');

 myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['A', 'B', 'C', 'D', 'E', 'F'],
        datasets: [{
            //label: '# of Votes',
            data: [9, 7, 3, 5, 2, 3],
            backgroundColor:'white',
            borderColor: "white",
            borderWidth: 0.5
        }]
    },
    options: {
      legend:{
        display: false,
      },
      title: {
            display: true,
            text: 'Rooftop Solar Panel Installation In Five Cities'
        },
      tooltips: {
            "enabled": false
        },
      maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                   
                }
            }],
            xAxes:[{
              scaleLabel: {
        display: true,
        labelString: 'City'
      },
            }]
        }
    }
});


   
             
                }
            }
        },  



// Problem 2
       {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 7) + 1;
                op2 = Math.ceil(Math.random() * 7) + 1;
                op3 = Math.ceil(Math.random() * 7) + 1;
                op4 = Math.ceil(Math.random() * 7) + 1;
                op5 = Math.ceil(Math.random() * 7) + 1;
                op6 = Math.ceil(Math.random() * 7) + 1;
                op7 = Math.ceil(Math.random() * 7) + 1;
                fraction = reduce(op1,op2);
                
                return {
                   ques:`Find the measure of angle 1`,
                    Hint: `Its a hint`,
                    Answer: `Answer: $45 ^{\\circ}$`

                 }

                 //return `Find the 2 roots of the quadratic equation: $x^2 + ${opA}x + ${opB} $ `;
                //"Find the 2 roots of the quadratic equation: x^2 -" + (op1 + op2) + "x + " + (op1 * op2) + "";
            },
            answer: function() {
                return 1;
            },
            loadCanvas: function() {

                var cnavsCntnr = document.getElementById('canvas');

                if (cnavsCntnr.getContext) {

    myChart.destroy();
   var contx = cnavsCntnr.getContext('2d');
   var ctx = canvas.getContext('2d');


 myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [2006, 2007, 2008, 2009, 2010, 2011],
        datasets: [{
            //label: '# of Votes',
            data: [50, 60, 100, 120, 150, 160],
            //backgroundColor:'white',
            borderColor: "white",
            borderWidth: 2
        }]
    },
    options: {
      legend:{
        display: false,
      },
       title: {
            display: true,
            text: 'Number of portable media players sold worldwide each year from 2006 to 2011'
        },
      tooltips: {
            "enabled": false
        },
      maintainAspectRatio: false,
        scales: {
            xAxes: [{scaleLabel: {
        display: true,
        labelString: 'Year'
      },
                ticks: {
                    beginAtZero: true
                }
            }],
             yAxes:[{
               scaleLabel: {
        display: true,
        labelString: 'Number sold(millions)'
      }
             }]
        }
    }
});

             
                }
            }
        },  



// Problem 3
       {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 7) + 1;
                op2 = Math.ceil(Math.random() * 7) + 1;
                op3 = Math.ceil(Math.random() * 7) + 1;
                op4 = Math.ceil(Math.random() * 7) + 1;
                op5 = Math.ceil(Math.random() * 7) + 1;
                op6 = Math.ceil(Math.random() * 7) + 1;
                op7 = Math.ceil(Math.random() * 7) + 1;
                fraction = reduce(op1,op2);
                
                return {
                   ques:`Find the measure of angle 1`,
                    Hint: `Its a hint`,
                    Answer: `Answer: $45 ^{\\circ}$`

                 }

                 //return `Find the 2 roots of the quadratic equation: $x^2 + ${opA}x + ${opB} $ `;
                //"Find the 2 roots of the quadratic equation: x^2 -" + (op1 + op2) + "x + " + (op1 * op2) + "";
            },
            answer: function() {
                return 1;
            },
            loadCanvas: function() {
 myChart.destroy();
                var cnavsCntnr = document.getElementById('canvas');

                if (cnavsCntnr.getContext) {

      
   var contx = cnavsCntnr.getContext('2d');
   var ctx = canvas.getContext('2d');

myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [1960, 1970, 1980, 1990, 2000, 2010],
        datasets: [{
            //label: '# of Votes',
            data: [50, 60, 100, 120, 150, 160],
            //backgroundColor:'white',
            borderColor: "white",
            borderWidth: 2
        }]
    },
     options: {
       legend:{
        display: false,
      },
       title: {
            display: true,
            text: 'Miles traveled by air passangers in country X,1960 to 2005'
        },
      tooltips: {
            "enabled": false
        },
      maintainAspectRatio: false,
        scales: {
          xAxes:[{
            scaleLabel: {
        display: true,
        labelString: 'Year'
      }
          }],
            yAxes: [{
              scaleLabel: {
        display: true,
        labelString: 'Number of miles traveled(billions)'
      },
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    
    }
});
 
                }
            }
        },  



// Problem 4
       {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 7) + 1;
                op2 = Math.ceil(Math.random() * 7) + 1;
                op3 = Math.ceil(Math.random() * 7) + 1;
                op4 = Math.ceil(Math.random() * 7) + 1;
                op5 = Math.ceil(Math.random() * 7) + 1;
                op6 = Math.ceil(Math.random() * 7) + 1;
                op7 = Math.ceil(Math.random() * 7) + 1;
                fraction = reduce(op1,op2);
                
                return {
                   ques:`Find the measure of angle 1`,
                    Hint: `Its a hint`,
                    Answer: `Answer: $45 ^{\\circ}$`

                 }

                 //return `Find the 2 roots of the quadratic equation: $x^2 + ${opA}x + ${opB} $ `;
                //"Find the 2 roots of the quadratic equation: x^2 -" + (op1 + op2) + "x + " + (op1 * op2) + "";
            },
            answer: function() {
                return 1;
            },
            loadCanvas: function() {

                var cnavsCntnr = document.getElementById('canvas');

                if (cnavsCntnr.getContext) {

                       var contx = cnavsCntnr.getContext('2d');
   var ctx = canvas.getContext('2d');
ctx.height=300;
   
var data = "<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'>" +
             "<foreignObject width='100%' height='100%'>" +
               "<div xmlns='http://www.w3.org/1999/xhtml' style='font-size:12px;color:white;text-align:center;'><h5>Number of registered voters in United States in 2012,in thousand</h5>" +
                  "<table  class='table' border='1'><tr><td></td><td colspan='5'>Age in years</td><td></td></tr>"+
                  "<tr><td> Region </td><td>18 to 24</td><td>25 to 44</td><td>45 to 64</td><td>65 to 74</td><td>5 and older</td><td>Total</td></tr>"+
                  "<tr><td> Northest </td><td>2713</td><td>8159</td><td>10986</td><td>3342</td><td>2775</td><td>27975</td></tr>"+
                  "<tr><td> Midest </td><td>3453</td><td>11237</td><td>13867</td><td>4221</td><td>3350</td><td>36126</td></tr>"+
                  "<tr><td> South </td><td>3453</td><td>11237</td><td>13867</td><td>4221</td><td>3350</td><td>36126</td></tr>"+
                  "<tr><td> West </td><td>3453</td><td>11237</td><td>13867</td><td>4221</td><td>3350</td><td>36126</td></tr>"+
                  "<tr><td> Total </td><td>1466</td><td>47896</td><td>57795</td><td>18620</td><td>14080</td><td>153057</td></tr>"+
                  "</table>" +
               "</div>" +
             "</foreignObject>" +
           "</svg>";
var DOMURL = self.URL || self.webkitURL || self;
var img = new Image();
var svg = new Blob([data], {type: "image/svg+xml;charset=utf-8"});
var url = DOMURL.createObjectURL(svg);
img.onload = function() {
    ctx.drawImage(img, 0, 0);
    DOMURL.revokeObjectURL(url);
};
img.src = url;

             

                }
            }
        },  


// Problem 5
       {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 7) + 1;
                op2 = Math.ceil(Math.random() * 7) + 1;
                op3 = Math.ceil(Math.random() * 7) + 1;
                op4 = Math.ceil(Math.random() * 7) + 1;
                op5 = Math.ceil(Math.random() * 7) + 1;
                op6 = Math.ceil(Math.random() * 7) + 1;
                op7 = Math.ceil(Math.random() * 7) + 1;
                fraction = reduce(op1,op2);
                
                return {
                   ques:`Find the measure of angle 1`,
                    Hint: `Its a hint`,
                    Answer: `Answer: $45 ^{\\circ}$`

                 }

                 //return `Find the 2 roots of the quadratic equation: $x^2 + ${opA}x + ${opB} $ `;
                //"Find the 2 roots of the quadratic equation: x^2 -" + (op1 + op2) + "x + " + (op1 * op2) + "";
            },
            answer: function() {
                return 1;
            },
            loadCanvas: function() {

                var cnavsCntnr = document.getElementById('canvas');

                if (cnavsCntnr.getContext) {

   
   var contx = cnavsCntnr.getContext('2d');
   var ctx = canvas.getContext('2d');

  //Shape25;
                   //Shape25;
               ctx.shadowColor ="rgba(0,0,0,0)";
               ctx.strokeStyle ="white";
               ctx.lineWidth = 2;
               ctx.lineCap = "butt";
               ctx.lineJoin = "miter";
               ctx.beginPath();
               ctx.moveTo(246,124);
               ctx.lineTo(246,124);
               ctx.stroke();

               //Shape29;
               ctx.shadowColor ="rgba(0,0,0,0)";
               ctx.strokeStyle ="white";
               ctx.lineWidth = 2;
               ctx.lineCap = "butt";
               ctx.lineJoin = "miter";
               ctx.beginPath();
               ctx.moveTo(197,76);
               ctx.lineTo(197,76);
               ctx.lineTo(197,76);
               ctx.lineTo(197,76);
               ctx.lineTo(197,76);
               ctx.closePath();
               ctx.stroke();
               ctx.shadowOffsetX = 15;
               ctx.shadowOffsetY = 15;
               ctx.shadowBlur = 0;
               ctx.shadowColor = "rgba(0,0,0,0)";
               ctx.fillStyle = "rgba(255,255,255,1)";


               //Shape36;
               ctx.shadowColor ="rgba(0,0,0,0)";
               ctx.strokeStyle ="white";
               ctx.lineWidth = 2;
               ctx.lineCap = "butt";
               ctx.lineJoin = "miter";
               ctx.beginPath();
               ctx.moveTo(161,118);
               ctx.lineTo(331,187);
               ctx.lineTo(161,187);
               ctx.lineTo(161,118);
               ctx.closePath();
               ctx.stroke();
               ctx.shadowOffsetX = 15;
               ctx.shadowOffsetY = 15;
               ctx.shadowBlur = 0;
               ctx.shadowColor = "rgba(0,0,0,0)";
               ctx.fillStyle = "rgba(255,255,255,1)";

             
                }
            }
        },  


// Problem 6
       {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 7) + 1;
                op2 = Math.ceil(Math.random() * 7) + 1;
                op3 = Math.ceil(Math.random() * 7) + 1;
                op4 = Math.ceil(Math.random() * 7) + 1;
                op5 = Math.ceil(Math.random() * 7) + 1;
                op6 = Math.ceil(Math.random() * 7) + 1;
                op7 = Math.ceil(Math.random() * 7) + 1;
                fraction = reduce(op1,op2);
                
                return {
                   ques:`Find the measure of angle 1`,
                    Hint: ``,
                    Answer: `Answer: $45 ^{\\circ}$`

                 }

                 //return `Find the 2 roots of the quadratic equation: $x^2 + ${opA}x + ${opB} $ `;
                //"Find the 2 roots of the quadratic equation: x^2 -" + (op1 + op2) + "x + " + (op1 * op2) + "";
            },
            answer: function() {
                return 1;
            },
            loadCanvas: function() {

                var cnavsCntnr = document.getElementById('canvas');

                if (cnavsCntnr.getContext) {

   
   var contx = cnavsCntnr.getContext('2d');
   var ctx = canvas.getContext('2d');

  //Shape25;
                   //Shape25;
               ctx.shadowColor ="rgba(0,0,0,0)";
               ctx.strokeStyle ="white";
               ctx.lineWidth = 2;
               ctx.lineCap = "butt";
               ctx.lineJoin = "miter";
               ctx.beginPath();
               ctx.moveTo(246,124);
               ctx.lineTo(246,124);
               ctx.stroke();

               //Shape29;
               ctx.shadowColor ="rgba(0,0,0,0)";
               ctx.strokeStyle ="white";
               ctx.lineWidth = 2;
               ctx.lineCap = "butt";
               ctx.lineJoin = "miter";
               ctx.beginPath();
               ctx.moveTo(197,76);
               ctx.lineTo(197,76);
               ctx.lineTo(197,76);
               ctx.lineTo(197,76);
               ctx.lineTo(197,76);
               ctx.closePath();
               ctx.stroke();
               ctx.shadowOffsetX = 15;
               ctx.shadowOffsetY = 15;
               ctx.shadowBlur = 0;
               ctx.shadowColor = "rgba(0,0,0,0)";
               ctx.fillStyle = "rgba(255,255,255,1)";


               //Shape36;
               ctx.shadowColor ="rgba(0,0,0,0)";
               ctx.strokeStyle ="white";
               ctx.lineWidth = 2;
               ctx.lineCap = "butt";
               ctx.lineJoin = "miter";
               ctx.beginPath();
               ctx.moveTo(161,118);
               ctx.lineTo(331,187);
               ctx.lineTo(161,187);
               ctx.lineTo(161,118);
               ctx.closePath();
               ctx.stroke();
               ctx.shadowOffsetX = 15;
               ctx.shadowOffsetY = 15;
               ctx.shadowBlur = 0;
               ctx.shadowColor = "rgba(0,0,0,0)";
               ctx.fillStyle = "rgba(255,255,255,1)";

             
                }
            }
        },  


// Problem 7
       {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 7) + 1;
                op2 = Math.ceil(Math.random() * 7) + 1;
                op3 = Math.ceil(Math.random() * 7) + 1;
                op4 = Math.ceil(Math.random() * 7) + 1;
                op5 = Math.ceil(Math.random() * 7) + 1;
                op6 = Math.ceil(Math.random() * 7) + 1;
                op7 = Math.ceil(Math.random() * 7) + 1;
                fraction = reduce(op1,op2);
                
                return {
                   ques:`Find the measure of angle 1`,
                    Hint: ``,
                    Answer: `Answer: $45 ^{\\circ}$`

                 }

                 //return `Find the 2 roots of the quadratic equation: $x^2 + ${opA}x + ${opB} $ `;
                //"Find the 2 roots of the quadratic equation: x^2 -" + (op1 + op2) + "x + " + (op1 * op2) + "";
            },
            answer: function() {
                return 1;
            },
            loadCanvas: function() {

                var cnavsCntnr = document.getElementById('canvas');

                if (cnavsCntnr.getContext) {

   
   var contx = cnavsCntnr.getContext('2d');
   var ctx = canvas.getContext('2d');

  //Shape25;
                   //Shape25;
               ctx.shadowColor ="rgba(0,0,0,0)";
               ctx.strokeStyle ="white";
               ctx.lineWidth = 2;
               ctx.lineCap = "butt";
               ctx.lineJoin = "miter";
               ctx.beginPath();
               ctx.moveTo(246,124);
               ctx.lineTo(246,124);
               ctx.stroke();

               //Shape29;
               ctx.shadowColor ="rgba(0,0,0,0)";
               ctx.strokeStyle ="white";
               ctx.lineWidth = 2;
               ctx.lineCap = "butt";
               ctx.lineJoin = "miter";
               ctx.beginPath();
               ctx.moveTo(197,76);
               ctx.lineTo(197,76);
               ctx.lineTo(197,76);
               ctx.lineTo(197,76);
               ctx.lineTo(197,76);
               ctx.closePath();
               ctx.stroke();
               ctx.shadowOffsetX = 15;
               ctx.shadowOffsetY = 15;
               ctx.shadowBlur = 0;
               ctx.shadowColor = "rgba(0,0,0,0)";
               ctx.fillStyle = "rgba(255,255,255,1)";


               //Shape36;
               ctx.shadowColor ="rgba(0,0,0,0)";
               ctx.strokeStyle ="white";
               ctx.lineWidth = 2;
               ctx.lineCap = "butt";
               ctx.lineJoin = "miter";
               ctx.beginPath();
               ctx.moveTo(161,118);
               ctx.lineTo(331,187);
               ctx.lineTo(161,187);
               ctx.lineTo(161,118);
               ctx.closePath();
               ctx.stroke();
               ctx.shadowOffsetX = 15;
               ctx.shadowOffsetY = 15;
               ctx.shadowBlur = 0;
               ctx.shadowColor = "rgba(0,0,0,0)";
               ctx.fillStyle = "rgba(255,255,255,1)";

             
                }
            }
        },  


// Problem 8
       {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 7) + 1;
                op2 = Math.ceil(Math.random() * 7) + 1;
                op3 = Math.ceil(Math.random() * 7) + 1;
                op4 = Math.ceil(Math.random() * 7) + 1;
                op5 = Math.ceil(Math.random() * 7) + 1;
                op6 = Math.ceil(Math.random() * 7) + 1;
                op7 = Math.ceil(Math.random() * 7) + 1;
                fraction = reduce(op1,op2);
                
                return {
                   ques:`Find the measure of angle 1`,
                    Hint: ``,
                    Answer: `Answer: $45 ^{\\circ}$`

                 }

                 //return `Find the 2 roots of the quadratic equation: $x^2 + ${opA}x + ${opB} $ `;
                //"Find the 2 roots of the quadratic equation: x^2 -" + (op1 + op2) + "x + " + (op1 * op2) + "";
            },
            answer: function() {
                return 1;
            },
            loadCanvas: function() {

                var cnavsCntnr = document.getElementById('canvas');

                if (cnavsCntnr.getContext) {

   
   var contx = cnavsCntnr.getContext('2d');
   var ctx = canvas.getContext('2d');

  //Shape25;
                   //Shape25;
               ctx.shadowColor ="rgba(0,0,0,0)";
               ctx.strokeStyle ="white";
               ctx.lineWidth = 2;
               ctx.lineCap = "butt";
               ctx.lineJoin = "miter";
               ctx.beginPath();
               ctx.moveTo(246,124);
               ctx.lineTo(246,124);
               ctx.stroke();

               //Shape29;
               ctx.shadowColor ="rgba(0,0,0,0)";
               ctx.strokeStyle ="white";
               ctx.lineWidth = 2;
               ctx.lineCap = "butt";
               ctx.lineJoin = "miter";
               ctx.beginPath();
               ctx.moveTo(197,76);
               ctx.lineTo(197,76);
               ctx.lineTo(197,76);
               ctx.lineTo(197,76);
               ctx.lineTo(197,76);
               ctx.closePath();
               ctx.stroke();
               ctx.shadowOffsetX = 15;
               ctx.shadowOffsetY = 15;
               ctx.shadowBlur = 0;
               ctx.shadowColor = "rgba(0,0,0,0)";
               ctx.fillStyle = "rgba(255,255,255,1)";


               //Shape36;
               ctx.shadowColor ="rgba(0,0,0,0)";
               ctx.strokeStyle ="white";
               ctx.lineWidth = 2;
               ctx.lineCap = "butt";
               ctx.lineJoin = "miter";
               ctx.beginPath();
               ctx.moveTo(161,118);
               ctx.lineTo(331,187);
               ctx.lineTo(161,187);
               ctx.lineTo(161,118);
               ctx.closePath();
               ctx.stroke();
               ctx.shadowOffsetX = 15;
               ctx.shadowOffsetY = 15;
               ctx.shadowBlur = 0;
               ctx.shadowColor = "rgba(0,0,0,0)";
               ctx.fillStyle = "rgba(255,255,255,1)";

             
                }
            }
        },  


	
// Problem 9
       {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 7) + 1;
                op2 = Math.ceil(Math.random() * 7) + 1;
                op3 = Math.ceil(Math.random() * 7) + 1;
                op4 = Math.ceil(Math.random() * 7) + 1;
                op5 = Math.ceil(Math.random() * 7) + 1;
                op6 = Math.ceil(Math.random() * 7) + 1;
                op7 = Math.ceil(Math.random() * 7) + 1;
                fraction = reduce(op1,op2);
                
                return {
                   ques:`Find the measure of angle 1`,
                    Hint: ``,
                    Answer: `Answer: $45 ^{\\circ}$`

                 }

                 //return `Find the 2 roots of the quadratic equation: $x^2 + ${opA}x + ${opB} $ `;
                //"Find the 2 roots of the quadratic equation: x^2 -" + (op1 + op2) + "x + " + (op1 * op2) + "";
            },
            answer: function() {
                return 1;
            },
            loadCanvas: function() {

                var cnavsCntnr = document.getElementById('canvas');

                if (cnavsCntnr.getContext) {

   
   var contx = cnavsCntnr.getContext('2d');
   var ctx = canvas.getContext('2d');

  //Shape25;
                   //Shape25;
               ctx.shadowColor ="rgba(0,0,0,0)";
               ctx.strokeStyle ="white";
               ctx.lineWidth = 2;
               ctx.lineCap = "butt";
               ctx.lineJoin = "miter";
               ctx.beginPath();
               ctx.moveTo(246,124);
               ctx.lineTo(246,124);
               ctx.stroke();

               //Shape29;
               ctx.shadowColor ="rgba(0,0,0,0)";
               ctx.strokeStyle ="white";
               ctx.lineWidth = 2;
               ctx.lineCap = "butt";
               ctx.lineJoin = "miter";
               ctx.beginPath();
               ctx.moveTo(197,76);
               ctx.lineTo(197,76);
               ctx.lineTo(197,76);
               ctx.lineTo(197,76);
               ctx.lineTo(197,76);
               ctx.closePath();
               ctx.stroke();
               ctx.shadowOffsetX = 15;
               ctx.shadowOffsetY = 15;
               ctx.shadowBlur = 0;
               ctx.shadowColor = "rgba(0,0,0,0)";
               ctx.fillStyle = "rgba(255,255,255,1)";


               //Shape36;
               ctx.shadowColor ="rgba(0,0,0,0)";
               ctx.strokeStyle ="white";
               ctx.lineWidth = 2;
               ctx.lineCap = "butt";
               ctx.lineJoin = "miter";
               ctx.beginPath();
               ctx.moveTo(161,118);
               ctx.lineTo(331,187);
               ctx.lineTo(161,187);
               ctx.lineTo(161,118);
               ctx.closePath();
               ctx.stroke();
               ctx.shadowOffsetX = 15;
               ctx.shadowOffsetY = 15;
               ctx.shadowBlur = 0;
               ctx.shadowColor = "rgba(0,0,0,0)";
               ctx.fillStyle = "rgba(255,255,255,1)";

             
                }
            }
        },  


// Problem 10
       {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 7) + 1;
                op2 = Math.ceil(Math.random() * 7) + 1;
                op3 = Math.ceil(Math.random() * 7) + 1;
                op4 = Math.ceil(Math.random() * 7) + 1;
                op5 = Math.ceil(Math.random() * 7) + 1;
                op6 = Math.ceil(Math.random() * 7) + 1;
                op7 = Math.ceil(Math.random() * 7) + 1;
                fraction = reduce(op1,op2);
                
                return {
                   ques:`Find the measure of angle 1`,
                    Hint: ``,
                    Answer: `Answer: $45 ^{\\circ}$`

                 }

                 //return `Find the 2 roots of the quadratic equation: $x^2 + ${opA}x + ${opB} $ `;
                //"Find the 2 roots of the quadratic equation: x^2 -" + (op1 + op2) + "x + " + (op1 * op2) + "";
            },
            answer: function() {
                return 1;
            },
            loadCanvas: function() {

                var cnavsCntnr = document.getElementById('canvas');

                if (cnavsCntnr.getContext) {

   
   var contx = cnavsCntnr.getContext('2d');
   var ctx = canvas.getContext('2d');

  //Shape25;
                   //Shape25;
               ctx.shadowColor ="rgba(0,0,0,0)";
               ctx.strokeStyle ="white";
               ctx.lineWidth = 2;
               ctx.lineCap = "butt";
               ctx.lineJoin = "miter";
               ctx.beginPath();
               ctx.moveTo(246,124);
               ctx.lineTo(246,124);
               ctx.stroke();

               //Shape29;
               ctx.shadowColor ="rgba(0,0,0,0)";
               ctx.strokeStyle ="white";
               ctx.lineWidth = 2;
               ctx.lineCap = "butt";
               ctx.lineJoin = "miter";
               ctx.beginPath();
               ctx.moveTo(197,76);
               ctx.lineTo(197,76);
               ctx.lineTo(197,76);
               ctx.lineTo(197,76);
               ctx.lineTo(197,76);
               ctx.closePath();
               ctx.stroke();
               ctx.shadowOffsetX = 15;
               ctx.shadowOffsetY = 15;
               ctx.shadowBlur = 0;
               ctx.shadowColor = "rgba(0,0,0,0)";
               ctx.fillStyle = "rgba(255,255,255,1)";


               //Shape36;
               ctx.shadowColor ="rgba(0,0,0,0)";
               ctx.strokeStyle ="white";
               ctx.lineWidth = 2;
               ctx.lineCap = "butt";
               ctx.lineJoin = "miter";
               ctx.beginPath();
               ctx.moveTo(161,118);
               ctx.lineTo(331,187);
               ctx.lineTo(161,187);
               ctx.lineTo(161,118);
               ctx.closePath();
               ctx.stroke();
               ctx.shadowOffsetX = 15;
               ctx.shadowOffsetY = 15;
               ctx.shadowBlur = 0;
               ctx.shadowColor = "rgba(0,0,0,0)";
               ctx.fillStyle = "rgba(255,255,255,1)";

             
                }
            }
        },  


// Problem 11
       {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 7) + 1;
                op2 = Math.ceil(Math.random() * 7) + 1;
                op3 = Math.ceil(Math.random() * 7) + 1;
                op4 = Math.ceil(Math.random() * 7) + 1;
                op5 = Math.ceil(Math.random() * 7) + 1;
                op6 = Math.ceil(Math.random() * 7) + 1;
                op7 = Math.ceil(Math.random() * 7) + 1;
                fraction = reduce(op1,op2);
                
                return {
                   ques:`Find the measure of angle 1`,
                    Hint: ``,
                    Answer: `Answer: $45 ^{\\circ}$`

                 }

                 //return `Find the 2 roots of the quadratic equation: $x^2 + ${opA}x + ${opB} $ `;
                //"Find the 2 roots of the quadratic equation: x^2 -" + (op1 + op2) + "x + " + (op1 * op2) + "";
            },
            answer: function() {
                return 1;
            },
            loadCanvas: function() {

                var cnavsCntnr = document.getElementById('canvas');

                if (cnavsCntnr.getContext) {

   
   var contx = cnavsCntnr.getContext('2d');
   var ctx = canvas.getContext('2d');

  //Shape25;
                   //Shape25;
               ctx.shadowColor ="rgba(0,0,0,0)";
               ctx.strokeStyle ="white";
               ctx.lineWidth = 2;
               ctx.lineCap = "butt";
               ctx.lineJoin = "miter";
               ctx.beginPath();
               ctx.moveTo(246,124);
               ctx.lineTo(246,124);
               ctx.stroke();

               //Shape29;
               ctx.shadowColor ="rgba(0,0,0,0)";
               ctx.strokeStyle ="white";
               ctx.lineWidth = 2;
               ctx.lineCap = "butt";
               ctx.lineJoin = "miter";
               ctx.beginPath();
               ctx.moveTo(197,76);
               ctx.lineTo(197,76);
               ctx.lineTo(197,76);
               ctx.lineTo(197,76);
               ctx.lineTo(197,76);
               ctx.closePath();
               ctx.stroke();
               ctx.shadowOffsetX = 15;
               ctx.shadowOffsetY = 15;
               ctx.shadowBlur = 0;
               ctx.shadowColor = "rgba(0,0,0,0)";
               ctx.fillStyle = "rgba(255,255,255,1)";


               //Shape36;
               ctx.shadowColor ="rgba(0,0,0,0)";
               ctx.strokeStyle ="white";
               ctx.lineWidth = 2;
               ctx.lineCap = "butt";
               ctx.lineJoin = "miter";
               ctx.beginPath();
               ctx.moveTo(161,118);
               ctx.lineTo(331,187);
               ctx.lineTo(161,187);
               ctx.lineTo(161,118);
               ctx.closePath();
               ctx.stroke();
               ctx.shadowOffsetX = 15;
               ctx.shadowOffsetY = 15;
               ctx.shadowBlur = 0;
               ctx.shadowColor = "rgba(0,0,0,0)";
               ctx.fillStyle = "rgba(255,255,255,1)";

             
                }
            }
        },  

// Problem 12
       {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 7) + 1;
                op2 = Math.ceil(Math.random() * 7) + 1;
                op3 = Math.ceil(Math.random() * 7) + 1;
                op4 = Math.ceil(Math.random() * 7) + 1;
                op5 = Math.ceil(Math.random() * 7) + 1;
                op6 = Math.ceil(Math.random() * 7) + 1;
                op7 = Math.ceil(Math.random() * 7) + 1;
                fraction = reduce(op1,op2);
                
                return {
                   ques:`Find the measure of angle 1`,
                    Hint: ``,
                    Answer: `Answer: $45 ^{\\circ}$`

                 }

                 //return `Find the 2 roots of the quadratic equation: $x^2 + ${opA}x + ${opB} $ `;
                //"Find the 2 roots of the quadratic equation: x^2 -" + (op1 + op2) + "x + " + (op1 * op2) + "";
            },
            answer: function() {
                return 1;
            },
            loadCanvas: function() {

                var cnavsCntnr = document.getElementById('canvas');

                if (cnavsCntnr.getContext) {

   
   var contx = cnavsCntnr.getContext('2d');
   var ctx = canvas.getContext('2d');

  //Shape25;
                   //Shape25;
               ctx.shadowColor ="rgba(0,0,0,0)";
               ctx.strokeStyle ="white";
               ctx.lineWidth = 2;
               ctx.lineCap = "butt";
               ctx.lineJoin = "miter";
               ctx.beginPath();
               ctx.moveTo(246,124);
               ctx.lineTo(246,124);
               ctx.stroke();

               //Shape29;
               ctx.shadowColor ="rgba(0,0,0,0)";
               ctx.strokeStyle ="white";
               ctx.lineWidth = 2;
               ctx.lineCap = "butt";
               ctx.lineJoin = "miter";
               ctx.beginPath();
               ctx.moveTo(197,76);
               ctx.lineTo(197,76);
               ctx.lineTo(197,76);
               ctx.lineTo(197,76);
               ctx.lineTo(197,76);
               ctx.closePath();
               ctx.stroke();
               ctx.shadowOffsetX = 15;
               ctx.shadowOffsetY = 15;
               ctx.shadowBlur = 0;
               ctx.shadowColor = "rgba(0,0,0,0)";
               ctx.fillStyle = "rgba(255,255,255,1)";


               //Shape36;
               ctx.shadowColor ="rgba(0,0,0,0)";
               ctx.strokeStyle ="white";
               ctx.lineWidth = 2;
               ctx.lineCap = "butt";
               ctx.lineJoin = "miter";
               ctx.beginPath();
               ctx.moveTo(161,118);
               ctx.lineTo(331,187);
               ctx.lineTo(161,187);
               ctx.lineTo(161,118);
               ctx.closePath();
               ctx.stroke();
               ctx.shadowOffsetX = 15;
               ctx.shadowOffsetY = 15;
               ctx.shadowBlur = 0;
               ctx.shadowColor = "rgba(0,0,0,0)";
               ctx.fillStyle = "rgba(255,255,255,1)";

             
                }
            }
        },  



      

    ]
	
};

$(document).ready(function() {
    var questionField = $("#question");

    // var totalQuestion = quiz.data.length;
    var totalQuestion = quiz.question;
    var currentIndex = 0;
    var progressField = $("#progress");
    var timerField = $("#timer");
    var intervalHandle = null;
    var hint = $("#hint");
    var answer = $(".answer")



    // shuffle quiz.data
    if (quiz.randomize) {
        shuffle(quiz.data);
    }

    function loadQuestion() {
        progressField.text("Question " + (currentIndex + 1) + " of " + totalQuestion);

        var remainingSec = quiz.duration;
                
        var min = Math.floor(remainingSec / 60);
        var sec = remainingSec % 60;
        if (min < 10)
            min = "0" + min;
        if (sec < 10)
            sec = "0" + sec;
        timerField.text(min + ":" + sec);

			  
        dataSet = quiz.data[currentIndex].question();

			  questionField.html(dataSet.ques);
        hint.html(dataSet.Hint);
        answer.html(dataSet.Answer);
			
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, questionField[0]]);	
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, hint[0]]);
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, answer[0]]);
        

        setTimeout(function() {
            if (currentIndex === 0) {
                questionField.css("opacity", 1);
            }

            quiz.data[currentIndex].loadCanvas();
            animateQuestion(remainingSec);
            $('.next_question').click(function(){
                
            })
        }, 500);
    }


    function animateQuestion(remainingSec) {
        questionField.removeClass("zoomOutLeft");
        questionField.addClass("zoomIn");
        setTimeout(function() {
            intervalHandle = setInterval(function() {
                remainingSec -= 1;
                if (remainingSec > 0) {
                    var min = Math.floor(remainingSec / 60);
                    var sec = remainingSec % 60;
                    if (min < 10)
                        min = "0" + min;
                    if (sec < 10)
                        sec = "0" + sec;
                    timerField.text(min + ":" + sec);
                    loadhint(sec);
                    loadanswer(sec);
                } else {
                    // unload the question

                    timerField.text("00:00");
                    clearInterval(intervalHandle);

                    questionField.removeClass("zoomIn");
                    questionField.addClass("zoomOutLeft");
                    removeCanvas();
                    setTimeout(function() {
                        if (currentIndex < totalQuestion - 1) {
                            loadQuestion(++currentIndex);
                        } else {
                            questionField.hide();
                            progressField.css("visibility", "hidden");
                            timerField.css("visibility", "hidden");
                            $("#resultBox").fadeIn();
                        }
                    }, 1000);
                }
            }, 1000);
        }, 1000);
    }

    function loadhint(second) {
        if (second <= 30 && second >= 5){
            hint.fadeIn(2000);
        }else if(second >= 30){
            $('.ask_hint').click(function(){
                hint.fadeIn(1000);
            });
        }else{
            hint.fadeOut(2000);
        }
    }

    function loadanswer(secondCountAns) {
        if (secondCountAns <= 15 && secondCountAns >= 5){
            answer.fadeIn(2000);
        }else if(secondCountAns >= 15){
            $('.check_answer').click(function(){
                answer.fadeIn(1000);
            });
        }else{
            answer.fadeOut(2000);
        }
    }

    loadQuestion(currentIndex);

    $('.choose').click(function(){
        $('.audio_container').slideToggle();
    });

    $('.audio_one').click(function(){
        $('#audioChange').attr('src', 'https://bluerocketacademy.com/wp-content/uploads/2020/09/Binaural.mp3');
        $('.audio_container').slideUp();
    })
    $('.audio_two').click(function(){
        $('#audioChange').attr('src', 'https://bluerocketacademy.com/wp-content/uploads/2020/09/Classical.mp3');
        $('.audio_container').slideUp();
    })

    function removeCanvas() {
      myChart.destroy();
        var cnavsCntnr = document.getElementById('canvas');

        if (cnavsCntnr.getContext) {
            var contx = cnavsCntnr.getContext('2d');
            contx.clearRect(0, 0, 500, 400);


        }
    }
});

