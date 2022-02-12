import { Injectable } from '@angular/core';
import { translates } from '../constants/translates';
import { Translate } from '../models/entities/translate';
export let allTranslates: Map<string, string> = new Map<string, string>();

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  values: Translate[] = translates;

  constructor() {}

  public getAllTranslatesByCode(code: string) {
    let newValues: Translate[] = this.values.filter((v) => v.languageId === 1);

    if (code === 'tr-TR') {
      newValues = this.values.filter((v) => v.languageId === 1);
    } else if (code === 'en-US') {
      newValues = this.values.filter((v) => v.languageId === 2);
    }

    this.values = newValues;
    this.setTranslates();
  }

  setTranslates() {
    this.values.forEach((v) => {
      allTranslates.set(v.key, v.value);
    });
  }
}
