import { Component, Directive, HostBinding, HostListener, Input } from '@angular/core';
import { NgModel } from '@angular/forms';

@Directive({
  selector: '[appHostBinding]'
})
export class HostBindingDirective {

  possibleColors = [
    'darksalmon',
    'hotpink',
    'lightskyblue',
    'goldenrod',
    'peachpuff',
    'mediumspringgreen',
    'cornflowerblue',
    'blanchedalmond',
    'lightslategrey'
  ];

  constructor() {}

  // @HostBinding('style.color') color!: string;
  @HostBinding('style.border-color') borderColor!: string;
  @HostBinding('style.color') colorRed!: string;

  @HostListener('keydown') newColor() {
    const colorPick = Math.floor(Math.random() * this.possibleColors.length);

    this.borderColor = this.possibleColors[colorPick];
  }

  @HostListener('mouseup') mouseMove() {
    this.colorRed = 'red';
    console.log('entro');
  }

  @HostListener('mousemove') mouseUp() {
    this.colorRed = 'blue';
  }
}