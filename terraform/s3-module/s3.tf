
resource "aws_s3_bucket" "aprendendo_terraform" {
  bucket = lower(join("-", [var.bucket_name, var.env]))

  tags = var.tags
}

resource "aws_s3_bucket_ownership_controls" "aprendendo_terraform" {
  bucket = aws_s3_bucket.aprendendo_terraform.id
  rule {
    object_ownership = "BucketOwnerPreferred"
  }
}

resource "aws_s3_bucket_acl" "aprendendo_terraform" {
  depends_on = [aws_s3_bucket.aprendendo_terraform]
  bucket     = aws_s3_bucket.aprendendo_terraform.id
  acl        = "private"
}
