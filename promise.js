let promiseBtnRESOLVE = document.getElementById("promise-bnt");
let promiseBtnREJECT = document.getElementById("reject-btn");

const promise = new Promise((res, rej) => {
  promiseBtnRESOLVE.addEventListener("click", () => {
    res("resolved");
  });
  promiseBtnREJECT.addEventListener("click", () => {
    res("rejected");
  });
});

try {
    const myPromiseResp =  await promise;
  console.log(myPromiseResp);
} catch (err) {
  console.log(err);
}
