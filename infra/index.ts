import * as aws from "@pulumi/aws";
import * as pulumi from "@pulumi/pulumi";

const stack = pulumi.getStack();
const project = pulumi.getProject();

const name = (name: string) => {
  return [stack, project, name].join("-");
};

const db = (id: string, engine: aws.rds.EngineType) => {
  const password = process.env.DB_PASSWORD;

  const cluster = new aws.rds.Cluster(name("db-cluster"), {
    engine,
    databaseName: id,
    masterPassword: password,
    masterUsername: id,
    clusterIdentifier: id,
    serverlessv2ScalingConfiguration: { minCapacity: 0.5, maxCapacity: 16 },
  });

  const instance = new aws.rds.ClusterInstance(
    name("db-cluster-instance"),
    {
      clusterIdentifier: cluster.clusterIdentifier,
      identifier: id,
      instanceClass: "db.serverless",
      publiclyAccessible: true,
      engine,
    },
    { dependsOn: [cluster] }
  );

  return { instance, cluster };
};

const bucket = new aws.s3.Bucket(name("images"), {
  corsRules: [
    {
      allowedMethods: ["PUT", "GET", "HEAD", "POST"],
      allowedOrigins: ["*"],
      allowedHeaders: ["*"],
    },
  ],
});

const psql = db("nycphotostroll", "aurora-postgresql");

export const masterPassword = psql.cluster.masterPassword;

export const S3_BUCKET = bucket.id;
