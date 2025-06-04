let form = document.querySelector('form');
    form.addEventListener('submit', e => {
      e.preventDefault();
      let output = document.querySelector('output');
      let firstNum = document.querySelector('#first-num').value;
      let secondNum = document.querySelector('#second-num').value;
      let operator = document.querySelector('#operator').value;
      output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
    });

    let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));
    let timerStart = false;

    errorBtns.forEach(btn=> {
        btn.addEventListener('click', ()=>{
        switch (btn.textContent){
            case 'Console Log':
                console.log("log");
                break;
            case 'Console Error':
                console.error("error");
                break;
            case 'Console Count':
                console.count("count");
                break;
            case 'Console Warn':
                console.warn("warned");
                break;
            case 'Console Assert':
                console.assert(false, "Assertion epic FAIL");
                break;
            case 'Console Clear':
                console.clear();
                break;
            case 'Console Group Start':
                console.group('Group Start thang');
                console.log('in da group');
                break;
            case 'Console Group End':
                console.groupEnd();
                break;
            case 'Console Table':
                console.table(errorBtns);
                break;
            case 'Start Timer':
                if (!timerStart) {
                    console.time("Demo Timer");
                    timerStart = true;
                } else {
                    console.log("Timer already started!");
                }
                break;
            case 'End Timer':
                if (timerStart) {
                    console.timeEnd("Demo Timer");
                    timerStart = false;
                } else {
                    console.log("Start dat timer first!");
                }
                break;
            case 'Console Trace':
                function traceDemo() {
                    function inner() {
                        console.trace("Console Trace Demo");
                    }
                    inner();
                }
                traceDemo();
                break;
            case 'Console Dir':
                console.dir();
                try {
                    alert( 'try' );
                    if (confirm('Make an error?')) BAD_CODE();
                  } catch (err) {
                    alert( 'catch' );
                  } finally {
                    alert( 'finally' );
                  }
                break;
            case 'Console dirxml':
                console.dirxml(document.querySelector('#error-btns'));
                break;
            case 'Trigger a Global Error':
                throw new ValidationError("Whoops!");
        }
        });
    });
    class ValidationError extends Error {
        constructor(message) {
          super(message); // (1)
          this.name = "ValidationError"; // (2)
        }
      }