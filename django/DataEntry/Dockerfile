FROM karenpanahi/djabase:1.0.0

COPY ./requirements /requirements
RUN /py/bin/pip install -r /requirements/developments.txt

COPY ./src /src 

WORKDIR /src/data_receiver

EXPOSE 8010

# RUN /py/bin/pip install -r /requirements/developments.txt

