import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateArticleDto {
  @IsString()
  readonly title: string;

  @IsNumber()
  readonly content: number;

  @IsOptional()
  @IsString()
  readonly images: string;
}
