import { TestBed, async } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';
import { DataPersistence } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';
import { MylazyEffects } from './mylazy.effects';

describe('MylazyEffects', () => {
  let actions;
  let effects: MylazyEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      providers: [MylazyEffects, DataPersistence, provideMockActions(() => actions)]
    });

    effects = TestBed.get(MylazyEffects);
  });

  describe('someEffect', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: { type: 'LOAD_DATA' } });
      expect(effects.loadData).toBeObservable(hot('-a-|', { a: { type: 'DATA_LOADED', payload: {} } }));
    });
  });
});
