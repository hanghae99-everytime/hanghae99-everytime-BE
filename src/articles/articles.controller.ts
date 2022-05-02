import { Controller } from '@nestjs/common';
import { Article } from './entities/article.entity';

@Controller('articles')
export class ArticlesController {
  private articles: Article[] = [];
}
