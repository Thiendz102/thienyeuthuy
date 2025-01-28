var xinChao = 'Cùng đếm ngược thời gian với anh nha!';

    function startCountdown() {
        // Hiển thị thông báo confirm
        var result = confirm(xinChao);

        // Nếu người dùng ấn Đồng ý
        if (result) {
            // Bắt đầu vòng lặp đếm ngược
            var seconds = 1; // Đặt số giây đếm ngược
            while (seconds > 0) {
                alert('vui lòng đợi 1s nhé😁' + ': ' + seconds + ' giây');
                seconds--;
            }
            alert('Chương trình xin đc phép bắt đầu!');
        } else {
            // Nếu người dùng ấn Hủy, gọi lại hàm để hiển thị confirm lại
            startCountdown();
        }
    }

    // Gọi hàm khi trang web được tải
    startCountdown();


       // Set the date we're counting down to
       const countDownDate = new Date("January 28, 2025 17:00:00 UTC").getTime();

        // Update the countdown every 1 second
        const x = setInterval(function() {
            // Get the current date and time
            const now = new Date().getTime();

            // Calculate the remaining time
            const distance = countDownDate - now;

            // Calculate days, hours, minutes, and seconds
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Display the countdown
            document.getElementById("days").innerText = formatTime(days);
            document.getElementById("hours").innerText = formatTime(hours);
            document.getElementById("minutes").innerText = formatTime(minutes);
            document.getElementById("seconds").innerText = formatTime(seconds);

            // If the countdown is over, display a message
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("countdown").innerHTML = "Happy New Year!";
            }
        }, 1000);

        // Helper function to format time with leading zeros
        function formatTime(time) {
            return time < 10 ? "0" + time : time;
        }

        var respon=window.innerWidth>992,numDes=4,numMB=1,leaveDes=8,leaveMob=6,numLeavesWind=respon?leaveDes:leaveMob,windSpeed=respon?numDes:numMB,LeafScene=function(t){this.viewport=t,this.world=document.createElement("div"),this.leaves=[],this.options={numLeaves:numLeavesWind,wind:{magnitude:1.2,maxSpeed:windSpeed,duration:100,start:0,speed:0}},this.width=this.viewport.offsetWidth,this.height=this.viewport.offsetHeight,this.timer=0,this._resetLeaf=function(t){t.x=2*this.width-Math.random()*this.width*1.75,t.y=-10,t.z=200*Math.random(),t.x>this.width&&(t.x=this.width+10,t.y=Math.random()*this.height/2),0==this.timer&&(t.y=Math.random()*this.height),t.rotation.speed=10*Math.random();var e=Math.random();return e>.5?t.rotation.axis="X":e>.25?(t.rotation.axis="Y",t.rotation.x=180*Math.random()+90):(t.rotation.axis="Z",t.rotation.x=360*Math.random()-180,t.rotation.speed=3*Math.random()),t.xSpeedVariation=.8*Math.random()-.4,t.ySpeed=Math.random()+1.5,t},this._updateLeaf=function(t){var e=this.options.wind.speed(this.timer-this.options.wind.start,t.y)+t.xSpeedVariation;t.x-=e,t.y+=t.ySpeed,t.rotation.value+=t.rotation.speed;var i="translateX( "+t.x+"px ) translateY( "+t.y+"px ) translateZ( "+t.z+"px )  rotate"+t.rotation.axis+"( "+t.rotation.value+"deg )";"X"!==t.rotation.axis&&(i+=" rotateX("+t.rotation.x+"deg)"),t.el.style.webkitTransform=i,t.el.style.MozTransform=i,t.el.style.oTransform=i,t.el.style.transform=i,(t.x<-10||t.y>this.height+10)&&this._resetLeaf(t)},this._updateWind=function(){if(0===this.timer||this.timer>this.options.wind.start+this.options.wind.duration){this.options.wind.magnitude=Math.random()*this.options.wind.maxSpeed,this.options.wind.duration=50*this.options.wind.magnitude+(20*Math.random()-10),this.options.wind.start=this.timer;var t=this.height;this.options.wind.speed=function(e,i){var a=this.magnitude/1.5*(t-2*i/3)/t;return a*Math.sin(2*Math.PI/this.duration*e+3*Math.PI/2)+a}}}};LeafScene.prototype.init=function(){for(var t=0;t<this.options.numLeaves;t++){var e={el:document.createElement("div"),x:80,y:80,z:80,rotation:{axis:"X",value:200,speed:100,x:0},xSpeedVariation:0,ySpeed:0,path:{type:1,start:0},image:1};this._resetLeaf(e),this.leaves.push(e),this.world.appendChild(e.el)}this.world.className="leaf-scene",this.viewport.appendChild(this.world),this.world.style.webkitPerspective="1440px",this.world.style.MozPerspective="1440px",this.world.style.oPerspective="1440px",this.world.style.perspective="1440px";var i=this;window.onresize=function(t){i.width=i.viewport.offsetWidth,i.height=i.viewport.offsetHeight}},LeafScene.prototype.render=function(){this._updateWind();for(var t=0;t<this.leaves.length;t++)this._updateLeaf(this.leaves[t]);this.timer++,requestAnimationFrame(this.render.bind(this))};var leafContainer=document.querySelector(".falling-leaves"),leaves=new LeafScene(leafContainer);leaves.init(),leaves.render();

        document.addEventListener('DOMContentLoaded', function () {
            setInterval(flashText, 2000); // Thay đổi màu mỗi 2 giây
          });

// Function to generate a random color
function getRandomColor() {
    var colours = ["#ffffff", "#ffff00", "#0e0", "#93f", "#0cf", "#f93", "#f0c"];
    return colours[Math.floor(Math.random() * colours.length)];
}

// Function to change the text color periodically
function changeTextColor() {
    var textElement = document.querySelector('.flashing-text');
    textElement.style.color = getRandomColor();
}

// Set an interval to change text color every 2000 milliseconds (2 seconds)
setInterval(changeTextColor, 1000);

var clickCount = 0;

document.addEventListener("click", function() {
    clickCount++;

    if (clickCount === 2) {
        window.location = "firework.html";
    }
});
