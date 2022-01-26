// article.controller.ts
import { Controller } from '@nestjs/common';
import { ArticleService } from './article.service';
import { Article } from './article.entity';
import { Crud } from '@nestjsx/crud';
import { ApiTags } from '@nestjs/swagger';

@Crud({
  model: {
    type: Article,
  },
  query: {
    join: {
      author: {
        eager: true,
      },
    },
  },
})
@ApiTags('articles')
@Controller('articles')
export class ArticleController {
  constructor(public service: ArticleService) {}
}