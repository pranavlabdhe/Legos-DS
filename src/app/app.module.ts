import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TypographyComponent } from './Components/typography/typography.component';
import { ButtonComponent } from './Components/button/button.component';
import { Layout12colComponent } from './Layouts/layout12col/layout12col.component';
import {MatCardModule} from '@angular/material/card';
import { TextfieldComponent } from './Components/textfield/textfield.component';
import { MatFormFieldModule } from '@angular/material/form-field'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { LayoutFourEightComponent } from './Components/layout-four-eight/layout-four-eight.component';
import { LayoutEightcolsComponent } from './Components/layout-eightcols/layout-eightcols.component';
import { LayoutEightFourComponent } from './Components/layout-eight-four/layout-eight-four.component';
import { LayoutSixColsComponent } from './Components/layout-six-cols/layout-six-cols.component';
import { LayoutThreeColsComponent } from './Components/layout-three-cols/layout-three-cols.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatListModule} from '@angular/material/list';
import { MaterialLayoutComponent } from './Components/material-layout/material-layout.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog'
import {MatTabsModule} from '@angular/material/tabs';
// ***ADDED MatInputModule***
import { MatInputModule } from '@angular/material/input';
// import { SurakshaChampComponent } from './Components/suraksha-champ/suraksha-champ.component';
import { PanSucessScreenComponent } from './Components/pan-sucess-screen/pan-sucess-screen.component';
import {MatMenuModule} from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { DmtComponent } from './Components/dmt/dmt.component';
import { MainNavComponent } from './Components/main-nav/main-nav.component';
import { DialogComponent } from './dialog/dialog.component';
import { AppbarComponent } from './Components/appbar/appbar.component';
import { SimpleListsComponent } from './Components/simple-lists/simple-lists.component';
import { PrimaryNavigationComponent } from './Components/primary-navigation/primary-navigation.component';
import { TabbarComponent } from './Components/tabbar/tabbar.component';
import { MatDialogTitle } from '@angular/material/dialog';
import { DialogElementsExampleDialog1 } from './Components/tabbar/tabbar.component';
import { TabbarsComponent } from './Components/tabbars/tabbars.component';
import { Screen1Component } from './Components/screen1/screen1.component';
@NgModule({
  declarations: [
    AppComponent,
    TypographyComponent,
    ButtonComponent,
    Layout12colComponent,
    TextfieldComponent,
    LayoutFourEightComponent,
    LayoutEightcolsComponent,
    LayoutEightFourComponent,
    LayoutSixColsComponent,
    LayoutThreeColsComponent,
    MaterialLayoutComponent,
    // SurakshaChampComponent,
    PanSucessScreenComponent,
    DmtComponent,
    MainNavComponent,
    DialogComponent,
    AppbarComponent,
    SimpleListsComponent,
    PrimaryNavigationComponent,
    TabbarComponent,
    DialogElementsExampleDialog1,
    TabbarsComponent,
    Screen1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatRadioModule,
    MatListModule,
    MatInputModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatSelectModule,
    MatToolbarModule,
    MatMenuModule,
    MatTableModule,
    MatIconModule,
    MatTabsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
