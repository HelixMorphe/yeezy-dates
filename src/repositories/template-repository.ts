import { Template } from '../types';

export class TemplateRepository {
  private templates: Map<string, Template> = new Map();

  get(name: string): Template | undefined {
    return this.templates.get(name);
  }

  getAll(): Template[] {
    return Array.from(this.templates.values());
  }

  add(name: string, template: Template): void {
    this.templates.set(name, template);
  }
}
