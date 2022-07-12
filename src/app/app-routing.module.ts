import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TypographyComponent} from'./Components/typography/typography.component';
import { ButtonComponent } from './Components/button/button.component';
import { Layout12colComponent } from './Layouts/layout12col/layout12col.component';
import { TextfieldComponent } from './Components/textfield/textfield.component';
import { LayoutFourEightComponent } from './Components/layout-four-eight/layout-four-eight.component';
import { LayoutEightcolsComponent } from './Components/layout-eightcols/layout-eightcols.component';
import { LayoutEightFourComponent } from './Components/layout-eight-four/layout-eight-four.component';
import { LayoutSixColsComponent } from './Components/layout-six-cols/layout-six-cols.component';
import { LayoutThreeColsComponent } from './Components/layout-three-cols/layout-three-cols.component';
import { MaterialLayoutComponent } from './Components/material-layout/material-layout.component';
import { DialogComponent } from './dialog/dialog.component';
// import { SurakshaChampComponent } from './Components/suraksha-champ/suraksha-champ.component';
import { PanSucessScreenComponent } from './Components/pan-sucess-screen/pan-sucess-screen.component';
import { DmtComponent } from './Components/dmt/dmt.component';
import { MainNavComponent } from './Components/main-nav/main-nav.component';

const routes: Routes = [
  {path:'typography',component:TypographyComponent},
  {path:'button',component:ButtonComponent},
  {path:'layoutcol12',component:Layout12colComponent},
  {path:'textfield',component:TextfieldComponent},
  {path:'layout4-8',component:LayoutFourEightComponent},
  {path:'layout8',component:LayoutEightcolsComponent},
  {path:'layout8-4',component:LayoutEightFourComponent},
  {path:'layoutcol6',component:LayoutSixColsComponent},
  {path:'layoutcol3',component:LayoutThreeColsComponent},
  {path:'material_layout',component:MaterialLayoutComponent},
  {path:'dialog',component:DialogComponent},
  // {path:'suraksha_champ',component:SurakshaChampComponent},
  // {path:'pan_success',component:PanSucessScreenComponent},
  // {path:'dmt',component:DmtComponent},
  // {path:'main_nav',component:MainNavComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
