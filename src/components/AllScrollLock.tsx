import React, { useEffect, useCallback } from "react";

const AllScrollLock = React.memo(() => {
  /**
   * イベントリスナーの設定
   */
  useEffect(() => {
    // モバイルスクロール禁止処理
    document.addEventListener("touchmove", scrollNo, { passive: false });

    return () => {
      // イベントの設定解除
      document.removeEventListener("touchmove", scrollNo);
    };
  }, []);

  /**
   * モバイルスクロール禁止処理
   */
  const scrollNo = useCallback((e:any) => {
    e.preventDefault();
  }, []);

  return <></>;
});

export default AllScrollLock;
