import { Injectable } from '@nestjs/common';
import {} from './dto/create-article.dto';
import {} from './dto/update-article.dto';
import { article } from './entities/article.entity';

@Injectable()
export class ArticlesService {
  private articles: article[] = [];

  getAll(): article[] {
    return this.articles;
  }
}
