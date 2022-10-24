FROM ubuntu:latest

LABEL maintainer="Abdel Monem Aissa <abdelmonem.aissa@esprit.tn>"

RUN mkdir /home/gse

WORKDIR /home/gse

COPY . .

RUN apt-get update

RUN apt-get install -y iputils-ping

CMD [ "ping", "-c", "10", "google.com" ]