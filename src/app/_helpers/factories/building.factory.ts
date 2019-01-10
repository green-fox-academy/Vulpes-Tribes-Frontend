import {ComponentFactory, ComponentFactoryResolver, FactoryProvider, OnInit} from '@angular/core';
import { Building} from '../../_models/building.model';
import {FactoryGenerator} from '@angular/compiler-cli/src/ngtsc/shims';

export class BuildingFactory {

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {

  }

}
