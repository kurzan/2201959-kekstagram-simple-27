const filterElement = document.querySelector('.img-filters');
const filerButtons = filterElement.querySelectorAll('.img-filters__button');

const showFilter = () => {
  filterElement.classList.remove('img-filters--inactive');

  filterElement.addEventListener('click', (evt) => {
    if (evt.target.matches('.img-filters__button')) {
      filerButtons.forEach((btn) => {
        btn.classList.remove('img-filters__button--active');
      });

      evt.target.classList.add('img-filters__button--active');
    }
  });
};


const setDefaultFilter = (descriptions) => descriptions;

const setDiscussedFilter = (descriptions) => {
  descriptions
    .slice()
    .sort((a, b) => b.description.length - a.description.length);
};


export { showFilter, setDefaultFilter, setDiscussedFilter };
