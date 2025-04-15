import {
  IsString,
  IsOptional,
  IsUUID,
  IsArray,
  ArrayUnique,
} from "class-validator";

export class UpdateNoteDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  content?: string;

  @IsOptional()
  @IsUUID()
  userId?: string;

  @IsOptional()
  @IsArray()
  @ArrayUnique()
  @IsUUID("all", { each: true })
  categoryIds?: string[];
}
