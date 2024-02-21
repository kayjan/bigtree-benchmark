window.BENCHMARK_DATA = {
  "lastUpdate": 1708538545394,
  "repoUrl": "https://github.com/kayjan/bigtree",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "name": "kayjan",
            "username": "kayjan"
          },
          "committer": {
            "name": "kayjan",
            "username": "kayjan"
          },
          "id": "37b4f216f559d1a0830eb0ae1518822c15ec2683",
          "message": "Benchmark another repo",
          "timestamp": "2024-02-15T12:50:01Z",
          "url": "https://github.com/kayjan/bigtree/pull/209/commits/37b4f216f559d1a0830eb0ae1518822c15ec2683"
        },
        "date": 1708538545247,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/node/test_node_benchmark.py::test_node_benchmark_width_1_depth_10",
            "value": 13416.353730092991,
            "unit": "iter/sec",
            "range": "stddev: 0.000017403170677691103",
            "extra": "mean: 74.53590000068289 usec\nrounds: 2"
          },
          {
            "name": "tests/node/test_node_benchmark.py::test_node_benchmark_width_1_depth_100",
            "value": 454.28557222425985,
            "unit": "iter/sec",
            "range": "stddev: 0.000048163800582630415",
            "extra": "mean: 2.201258549999352 msec\nrounds: 2"
          },
          {
            "name": "tests/node/test_node_benchmark.py::test_node_benchmark_width_1_depth_1000",
            "value": 6.499512446060801,
            "unit": "iter/sec",
            "range": "stddev: 0.0028424987618256943",
            "extra": "mean: 153.8576944500008 msec\nrounds: 2"
          },
          {
            "name": "tests/node/test_node_benchmark.py::test_node_benchmark_width_2_depth_10",
            "value": 49.473248429321515,
            "unit": "iter/sec",
            "range": "stddev: 0.00045799673913036386",
            "extra": "mean: 20.212944000000732 msec\nrounds: 2"
          },
          {
            "name": "tests/node/test_node_benchmark.py::test_node_benchmark_width_1_depth_10_no_assertions",
            "value": 21587.851221232493,
            "unit": "iter/sec",
            "range": "stddev: 0.000005593709616281311",
            "extra": "mean: 46.32234999917273 usec\nrounds: 2"
          },
          {
            "name": "tests/node/test_node_benchmark.py::test_node_benchmark_width_1_depth_100_no_assertions",
            "value": 1471.083860751227,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031552518803212424",
            "extra": "mean: 679.770900001131 usec\nrounds: 2"
          },
          {
            "name": "tests/node/test_node_benchmark.py::test_node_benchmark_width_1_depth_1000_no_assertions",
            "value": 134.04060483997907,
            "unit": "iter/sec",
            "range": "stddev: 0.000040552432479288236",
            "extra": "mean: 7.460425900001155 msec\nrounds: 2"
          },
          {
            "name": "tests/node/test_node_benchmark.py::test_node_benchmark_width_2_depth_10_no_assertions",
            "value": 78.3151792352128,
            "unit": "iter/sec",
            "range": "stddev: 0.00042302238920192964",
            "extra": "mean: 12.768916699999977 msec\nrounds: 2"
          }
        ]
      }
    ]
  }
}