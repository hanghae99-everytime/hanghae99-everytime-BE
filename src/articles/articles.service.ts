import { Injectable } from '@nestjs/common';
import { Article } from './entities/article.entity';

@Injectable()
export class ArticlesService {
  private articles: Article[] = [];

  getAll(): Article[] {
    return this.articles;
  }
}
