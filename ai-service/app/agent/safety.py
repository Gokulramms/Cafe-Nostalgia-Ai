def safety_check(question: str):
    """
    Blocks unsafe or irrelevant queries.
    """

    blocked_keywords = [
        "hack",
        "exploit",
        "steal",
        "bypass"
    ]

    q = question.lower()
    for word in blocked_keywords:
        if word in q:
            raise ValueError("Unsafe query detected")

    return True
