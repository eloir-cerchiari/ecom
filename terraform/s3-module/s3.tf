
resource "aws_s3_bucket" "ecom" {
  bucket = lower(join("-", [var.bucket_name, var.env]))

  tags = var.tags
}

resource "aws_s3_bucket_ownership_controls" "ecom" {
  bucket = aws_s3_bucket.ecom.id
  rule {
    object_ownership = "BucketOwnerPreferred"
  }
}

resource "aws_s3_bucket_acl" "ecom" {
  depends_on = [aws_s3_bucket.ecom]
  bucket     = aws_s3_bucket.ecom.id
  acl        = "private"
}
