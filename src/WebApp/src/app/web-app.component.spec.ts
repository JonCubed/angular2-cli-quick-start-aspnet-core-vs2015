import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { WebAppAppComponent } from '../app/web-app.component';

beforeEachProviders(() => [WebAppAppComponent]);

describe('App: WebApp', () => {
  it('should create the app',
      inject([WebAppAppComponent], (app: WebAppAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'web-app works!\'',
      inject([WebAppAppComponent], (app: WebAppAppComponent) => {
    expect(app.title).toEqual('web-app works!');
  }));
});
