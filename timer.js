class Timer{
    constructor(durationInput, startButton, pauseButton,callBacks){
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        if(callBacks){
            this.onStart = callBacks.onStart;
            this.onTick = callBacks.onTick;
            this.onComplete = callBacks.onComplete;
        }

        this.startButton.addEventListener('click',this.start);
        this.pauseButton.addEventListener('click',this.pause);
    }

    start = () => {
        if(this.onStart){
            this.onStart(this.timeRemianing);
        }
        this.tick();
        this.intervalId = setInterval(this.tick,50); // for every 50 milliseconds
    }

    tick = () => {
        if(this.timeRemianing <= 0){
            this.pause();
            if(this.onComplete){
                this.onComplete();
            }
        }else{
            this.timeRemianing =  this.timeRemianing -0.05 ;
            if(this.onTick){
                this.onTick(this.timeRemianing);
            }
        }
    }

    pause = () => {
        clearInterval(this.intervalId);
    }

    get timeRemianing(){
        return parseFloat(this.durationInput.value);
    }

    set timeRemianing(time){
        this.durationInput.value = time.toFixed(2);
    }
}