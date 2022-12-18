.PHONY: build start

start:
	docker run --name simon-website -it --rm -p 5000:80 simon-website

build:
	docker build --no-cache -f Dockerfile -t simon-website .

stop:
	docker kill simon-website