import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { MyAppComponent } from '../app/my.component';

beforeEachProviders(() => [MyAppComponent]);

describe('App: My', () => {
  it('should create the app',
      inject([MyAppComponent], (app: MyAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'my works!\'',
      inject([MyAppComponent], (app: MyAppComponent) => {
    expect(app.title).toEqual('my works!');
  }));
});
