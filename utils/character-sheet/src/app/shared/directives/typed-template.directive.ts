import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({ selector: 'ng-template[typedTemplate]', standalone: true })
export class TypedTemplateDirective<TypeToken> {
  @Input('typedTemplate') typeToken: TypeToken | null = null;

  constructor(private contentTemplate: TemplateRef<TypeToken>) {}

  static ngTemplateContextGuard<TypeToken>(
    dir: TypedTemplateDirective<TypeToken>,
    ctx: unknown
  ): ctx is TypeToken {
    return true;
  }
}