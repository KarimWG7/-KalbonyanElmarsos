// Challenge#3
const disappear = function (img) {
  currentImg = img;
  currentImg.style.display = 'none';
};
/////
const loadPause = async function () {
  try {
    let img = await createImage('img/img-1.jpg');
    if (!img) throw new Error('Image not found');
    await wait(2);
    disappear(img);
    img = await createImage('img/img-2.jpg');
    if (!img) throw new Error('Image not found');
    await wait(2);
    disappear(img);
  } catch (err) {
    console.error(`Something went wrong!: ${err}`);
  }
};
// loadPause();
const loadAll = async function (imgArr) {
  try {
    const imgs =  await imgArr.map( img =>  createImage(img));
    console.log(imgs);
    const imgsEl = await Promise.all(imgs)
    console.log(imgsEl);
    imgsEl.forEach(img => img.classList.add('parallel'))
  } catch (err) {
    console.error(err);
  }
};
loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
