export type SidebarProps = {
  setQuestionsTitle: React.Dispatch<React.SetStateAction<string>>;
};

export type PaginationProps = {
  totalPages: number;
};

export type NotFoundButtonProps = Pick<SidebarProps, "setQuestionsTitle">;

export type ModalProps = {
  index: number;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  setQuestionIsOpenID: React.Dispatch<React.SetStateAction<number | null>>;
};

export type SwitchQuestionsProps = {
  next: () => Promise<void>;
  prev: () => Promise<void>;
};
