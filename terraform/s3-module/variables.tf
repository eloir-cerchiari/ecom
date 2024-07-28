variable "bucket_name" {
  type        = string
  description = "The name of the S3 bucket"
}


variable "env" {
  type        = string
  description = "The environment for the project"
}

variable "tags" {
  type        = map(string)
  description = "The tags to apply to the S3 bucket"
  default = {
    Name        = "praticando-terraform"
    Environment = "Development"
  }
}

variable "aws_region" {
  type        = string
  description = "The AWS region to create resources in"
  default     = "us-east-2"
}
