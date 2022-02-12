import { Component, OnInit } from '@angular/core';
import { languages } from 'src/app/constants/languages';
import { Language } from 'src/app/models/entities/language';
import { SettingsService } from 'src/app/services/settings.service';
import { allTranslates } from 'src/app/services/translation.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css'],
})
export class NaviComponent implements OnInit {
  languages: Language[] = languages;
  
  constructor(private settingsService: SettingsService) {}

  ngOnInit(): void {}

  setLanguage(code: string) {
    console.log(code)
    this.settingsService.setLanguage(code);
    window.location.reload();
  }

  getTranslate(key: string) {
    return allTranslates.get(key);
  }
}
