
output "bucket_fqdn" {
  value       = aws_s3_bucket.ecom.bucket_domain_name
  description = "FQDN of the bucket"
}

output "bucket_domain" {
  value       = aws_s3_bucket.ecom.id
  description = "Bucket domain name (id)"
}
