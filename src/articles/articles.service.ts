import { Injectable } from '@nestjs/common';
import {} from './dto/create-article.dto';
import {} from './dto/update-article.dto';
import { Article } from './entities/article.entity';

@Injectable()
export class ArticlesService {
  private articles: Article[] = [];

  getAll(): Article[] {
    return this.articles;
  }
}
