import { Modal, Button } from "antd";
import React from "react"
import { useClearCache } from "react-clear-cache"


function withClearCache(Component: any) {
  function ClearCacheComponent(props: any) {
    const { isLatestVersion, emptyCacheStorage } = useClearCache()

    return (
      <React.Fragment>
        <Component {...props} />
        <div>
        {!isLatestVersion && (
        <Modal
          title="New version"
          okText='Reload'
          visible={true}
          keyboard={false}
          maskClosable={false}
          closable={false}
          footer={
            <Button type="primary" onClick={() => emptyCacheStorage()}>Reload</Button>
          }
        >
          <p>There is a new version of. Please, reload</p>
        </Modal>)}
      </div>
      </React.Fragment>
    )
  }

  return ClearCacheComponent
}

export default withClearCache
