import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from './entities/article.entity';
import { Repository } from 'typeorm';
import { ArticleDocument } from './entities/article-document.entity';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(Article) private articleRepository: Repository<Article>,
    @InjectRepository(ArticleDocument)
    private articleDocumentRepository: Repository<ArticleDocument>,
  ) {}

  create(createArticleDto: CreateArticleDto) {
    return this.articleRepository.save(createArticleDto);
  }

  findAll() {
    return `This action returns all artics`;
  }

  findOne(id: number) {
    return `This action returns a #${id} article`;
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    return `This action updates a #${id} article`;
  }

  remove(id: number) {
    return `This action removes a #${id} article`;
  }
}
