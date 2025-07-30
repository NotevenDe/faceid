use ic_agent::Agent;
use ic_agent::identity::AnonymousIdentity;
use ic_agent::agent::http_transport::ReqwestHttpReplicaV2Transport;
use std::error::Error;
use tokio;

/// 查询ICP交易并验证其有效性（使用匿名身份）
///
/// # 参数
/// - `transaction_hash`: 要查询的交易哈希
/// - `network_url`: ICP网络的URL（例如："https://ic0.app"）
///
/// # 返回值
/// - `Ok(true)`: 交易有效
/// - `Ok(false)`: 交易无效
/// - `Err`: 查询过程中发生错误
async fn check_transaction_validity(
    transaction_hash: &str,
    network_url: &str,
) -> Result<bool, Box<dyn Error>> {
    // 1. 创建Agent（使用匿名身份）
    let identity = AnonymousIdentity;
    let transport = ReqwestHttpReplicaV2Transport::create(network_url)?;
    let agent = Agent::builder()
        .with_transport(transport)
        .with_identity(identity)
        .build()?;

    // 2. 查询交易
    let transaction = agent
        .query_transaction(transaction_hash)
        .await?;

    // 3. 验证交易有效性
    Ok(transaction.is_valid())
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn Error>> {
    // 示例：调用封装的功能
    let transaction_hash = "your_transaction_hash_here";
    let network_url = "https://ic0.app";

    match check_transaction_validity(transaction_hash, network_url).await {
        Ok(true) => println!("Transaction is valid."),
        Ok(false) => println!("Transaction is invalid."),
        Err(e) => eprintln!("Error checking transaction: {}", e),
    }

    Ok(())
}