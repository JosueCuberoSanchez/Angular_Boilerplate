import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

// Components
import { CharacterComponent } from './components/character/character.component';
import { CharacterListComponent } from './components/character-list/character-list.component';

@NgModule({
  declarations: [
    CharacterComponent,
    CharacterListComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: 'list', component: CharacterListComponent },
      { path: ':id', component: CharacterComponent }
    ])
  ],
  providers: []
})
export class CharacterModule { }
