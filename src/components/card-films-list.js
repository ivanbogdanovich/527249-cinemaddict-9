import AbstractComponent from './abstract-component';

export default class CardFilms extends AbstractComponent {
  constructor(films) {
    super();
    this._films = films;
  }

  getTemplate() {
    return `
      <section class="films">
        <section class="films-list">
          <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>

          <div class="films-list__container"></div>
        </section>

        <section class="films-list--extra">
          <h2 class="films-list__title">Top rated</h2>

          <div class="films-list__container films-list__container--rated"></div>
        </section>

        <section class="films-list--extra">
          <h2 class="films-list__title">Most commented</h2>

          <div class="films-list__container films-list__container--commented"></div>
        </section>
      </section>
    `.trim();
  }
}
