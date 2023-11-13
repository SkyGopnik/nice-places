import React, { forwardRef, Ref } from "react";
import Sheet from "react-modal-sheet";

import { SheetProps } from "react-modal-sheet/src/types";

interface Props extends SheetProps {
  ref: Ref<any>
}

const BottomSheet = forwardRef(function(props: Props, ref) {
  return (
    <Sheet {...props} ref={ref}>
      <Sheet.Container className={props.className}>
        <Sheet.Content>
          {props.children}
        </Sheet.Content>
      </Sheet.Container>
    </Sheet>
  );
});

export default BottomSheet;
