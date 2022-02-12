import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Symbol } from 'src/app/models/entities/symbol';
import { allTranslates } from 'src/app/services/translation.service';
import { NgxSingleVariableFunctionParserService } from 'ngx-math-function-plotter';

@Component({
  selector: 'app-function-draw',
  templateUrl: './function-draw.component.html',
  styleUrls: ['./function-draw.component.css'],
})
export class FunctionDrawComponent implements OnInit {
  functionText: string = 'sin(x)';
  maxDisplayValue: number = 10;
  width: number = 600;
  functionInputForm: FormGroup;
  symbols: Symbol[] = [];
  resultOfCalculate: number;

  constructor(
    private formBuilder: FormBuilder,
    private mathExpressionParserService: NgxSingleVariableFunctionParserService
  ) {}

  ngOnInit(): void {
    this.createFunctionInputForm();
    this.setSymbols();
  }

  calculate() {
    let calculatedValue = this.functionInputForm.get('calculatedValue')?.value;
    let result =
      this.mathExpressionParserService.computeFunctionAtValue(calculatedValue);
    this.resultOfCalculate = result;
  }

  setSymbols() {
    this.symbols = [
      { operation: 'addition', syntax: '+' },
      { operation: 'subtraction', syntax: 'sub' },
      { operation: 'multiplication', syntax: '*' },
      { operation: 'division', syntax: '/' },
      { operation: 'leftParantheses', syntax: '(' },
      { operation: 'rightParantheses', syntax: ')' },
      { operation: 'sin', syntax: 'sin' },
      { operation: 'cos', syntax: 'cos' },
      { operation: 'tan', syntax: 'tan' },
      { operation: 'seq', syntax: 'seq' },
      { operation: 'csc', syntax: 'csc' },
      { operation: 'cot', syntax: 'cot' },
      { operation: 'power', syntax: '^' },
      { operation: 'squareRoot', syntax: 'sqr' },
      { operation: 'minus', syntax: '-' },
    ];
  }

  createFunctionInputForm() {
    this.functionInputForm = this.formBuilder.group({
      functionInput: ['sin(x)'],
      maxDisplayValue: [this.maxDisplayValue],
      calculatedValue: [0],
    });
  }

  submit() {
    this.functionText = this.functionInputForm.get('functionInput')?.value;
    this.mathExpressionParserService.setMathFunctionText(this.functionText);
    this.maxDisplayValue = this.functionInputForm.get('maxDisplayValue')?.value;
  }

  getTranslate(key: string) {
    return allTranslates.get(key);
  }
}
