import { Component, OnInit } from '@angular/core';
import { SettingsService } from './services/settings.service';
import { TranslationService } from './services/translation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'math-project-app';

  constructor(
    private translationService: TranslationService,
    private settingsService: SettingsService
  ) {}

  ngOnInit(): void {
    this.getAllTranslates();
  }

  getAllTranslates() {
    let code = this.settingsService.getLanguageCodeFromLocalStorage();
    console.log(code)
    this.translationService.getAllTranslatesByCode(code);
  }
}
