import { TestBed, async } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';
import { DataPersistence } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';
import { CoreEffects } from './core.effects';

describe('CoreEffects', () => {
  let actions;
  let effects: CoreEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      providers: [CoreEffects, DataPersistence, provideMockActions(() => actions)]
    });

    effects = TestBed.get(CoreEffects);
  });

  describe('someEffect', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: { type: 'LOAD_DATA' } });
      expect(effects.loadData).toBeObservable(hot('-a-|', { a: { type: 'DATA_LOADED', payload: {} } }));
    });
  });
});
