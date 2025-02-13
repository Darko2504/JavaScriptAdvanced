function step1(callback) {
  setTimeout(() => {
    console.log("Step 1 complete!");
    callback();
  }, 3000);
}

function step2(callback) {
  setTimeout(() => {
    console.log("Step 2 complete!");
    callback();
  }, 2000);
}

function step3(callback) {
  setTimeout(() => {
    console.log("Step 3 complete!");
    callback();
  }, 1000);
}

function step4(callback) {
    setTimeout(() => {
      console.log("Step 4 complete!");
    callback();

    }, 750);
  }

  function step5(callback) {
    setTimeout(() => {
      console.log("Step 5 complete!");
    callback();

    }, 600);
  }

  function step6(callback) {
    setTimeout(() => {
      console.log("Step 6 complete!");
     callback();

    }, 500);
  }

  function step7() {
    setTimeout(() => {
      console.log("Step 7 complete!");
     

    }, 100);
  }



step1(() => {
  step2(() => {
    step3(() =>{
        step4(() => {
            step5(() => {
                step6(() => {
                    step7()
                })
            })
        })
    });
  });
});
