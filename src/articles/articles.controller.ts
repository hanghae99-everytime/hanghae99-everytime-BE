import { Controller } from '@nestjs/common';
import { article } from './entities/article.entity';

@Controller('articles')
export class ArticlesController {
  private articles: article[] = [];
}
