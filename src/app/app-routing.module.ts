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
import { SimpleListsComponent } from './Components/simple-lists/simple-lists.component';
import { AppbarComponent } from './Components/appbar/appbar.component';
import { PrimaryNavigationComponent } from './Components/primary-navigation/primary-navigation.component';
import { TabbarComponent } from './Components/tabbar/tabbar.component'; 
import { TabbarsComponent } from './Components/tabbars/tabbars.component';
import { Screen1Component } from './Components/screen1/screen1.component';
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
  {path:'simple-list',component:SimpleListsComponent},
  {path:'appbar',component:AppbarComponent},  
  // {path:'suraksha_champ',component:SurakshaChampComponent},
  // {path:'pan_success',component:PanSucessScreenComponent},
  // {path:'dmt',component:DmtComponent},
  // {path:'main_nav',component:MainNavComponent},//old primary navigation
  {path:'primary_nav',component:PrimaryNavigationComponent},// updated primary navigation with 
  {path:'tabbar',component:TabbarComponent}, //tabbar with primary navigation and dialog
  // {path:'tabbars',component:TabbarsComponent}, //all variants of tabbars 
  {path:'screen1',component:Screen1Component} //includes with primary navigation along with tabbar and dialog
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
