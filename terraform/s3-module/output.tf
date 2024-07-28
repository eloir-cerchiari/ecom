
output "bucket_fqdn" {
  value       = aws_s3_bucket.aprendendo_terraform.bucket_domain_name
  description = "FQDN of the bucket"
}

output "bucket_domain" {
  value       = aws_s3_bucket.aprendendo_terraform.id
  description = "Bucket domain name (id)"
}
